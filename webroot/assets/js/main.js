/* plugins defination */
(function ($) { 
   
    /*Hide alert after 5 sec */    
    $(".alert").delay(5000).fadeOut("slow");  
    /* set image value in text field */
    $("#image").change(function(e){   
        var imgname=$("#image").val().split('\\').pop().split('/').pop();
        $("#image-text").val(imgname);
        if(imgname){
            $("#image-text").removeClass('invalid').siblings('.errorMsg').remove();
        }
    });
    /* when clicked on image textfield to open image browser*/
    $("#imginput-box").on('click',function(){
        //$("#image").trigger( "click" );
    });
    
    /*Image field required in edit case */
    $("#image").removeAttr('required');
    if( $("#image-text").val() ){
        $("#image").removeAttr('required');
    }
    
    /*for e-learning last element toggle to expand the li */
    $(".elearning-end").on('click',function(){
        $(this).toggleClass("elearning-ui");
    });
    
    
 /*For Iframe in modal */
 $.fn.frameModal = function(options){
     var options = $.extend({'title':null,'dialogClass':null} , options);
     var modalObj = $('#iframModal');
     
     $(this).on('click',function(e){
        e.preventDefault();
        if(options.title == null){
            modalObj.find(".modal-header").hide();
        }else{
            modalObj.find(".modal-header").show();
            modalObj.find(".modal-title").html("").html(options.title);
        }
        if(options.dialogClass != null){
            modalObj.find(".modal-dialog").addClass(options.dialogClass);
        }
        var frameSrc = $(this).attr('href');
        if($(this).attr('id') == 'editFrmBtn'){
            var editRow = $("input[name='spid']:checked");
            if(editRow.length <= 0 || editRow.length > 1){ 
                showAlert('Please select single record to edit.');
                return false;
            }
            frameSrc = frameSrc+'/'+editRow.val();
        }
        
        var iframeObj = modalObj.find('iframe');
        iframeObj.html("").attr('src',frameSrc).end().modal({backdrop: 'static'});
        iframeObj.load(function() {
            //$(this).attr('height',($(this).contents().height()+350));
        });
        
        $('#iframModal').on('hidden.bs.modal',function(){
            iframeObj.html("").attr('src','')
        });
         
     });
 };
 $.fn.resetPassword = function(options){ 
    $(this).on('click',function(e){
        e.preventDefault();
        var editRow = $("input[name='spid']:checked");
        if(editRow.length <= 0 || editRow.length > 1){ 
            showAlert('Please select any one row to reset password.');
            return false;
        }else{
            var url = $(this).attr('href')+'/'+editRow.val();
            postAjax(url,'',$(this));
        }
    });
 }
 $.fn.setSubAdmin = function(options){
    $(this).on('click',function(e){
        e.preventDefault();
        var editRow = $("input[name='spid']:checked");
        if(editRow.length <= 0 || editRow.length > 1){ 
            showAlert('Please select any one row to set subadmin.');
            return false;
        }else{
            var url = $(this).attr('href')+'/'+editRow.val();
            postAjax(url,'',$(this));
            $("#deleted").find('#alert-dismiss').addClass('reload');
        }
    });
 }
 
 /* reload page if button has reload class */
 $("#alert-dismiss,#confirm").on("click",function(){
     if($(this).hasClass("reload")){         
         window.location.reload();
     }
});


 
$.fn.sumitForm = function(options){
    var settings = $.extend({            
        callback: null,
    }, options );
    var btns = $(this).find('.btn');
    btns.on('click',function(){
        btns = $(this);
    });
    $(this).on('submit',function(e){
        e.preventDefault();
        if(!formValidate($(this))){
            return false;
        }
        var url = $(this).attr('action');        
        $.ajax({
            type: "POST",
            url: url,
            data: new FormData(this),
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {btns.buttonLoader('start');},
            success: function (response) {
                btns.buttonLoader('stop');
                if (settings.callback !== null) {
                    settings.callback(response);
                } else {
                    if(response.status == true){

                    }
                    showAlert(response.message);
                }
            },
            error: function () {
                btns.buttonLoader('stop');
                showAlert("Unexpected error, Please try again");
            }
        });         
    });
};

 
/* Suspected Words */

var $error = $('<div class="errorMsg"><span>This field is reuqired.</span></div>');
$.fn.addWords = function(){
    $(this).on('click',function(){
        $fieldVar = $("#suspectedwords");
        $fieldVar.siblings('.errorMsg').remove();
        if($fieldVar.val().length <= 0){
            $error.insertAfter($fieldVar);
        }else{             
            $('#suspectedwords').data('tagmanager').populate([$fieldVar.val()]);           
        }
    });
};
$.fn.saveWords = function(){
    $(this).on('submit',function(e){
        //e.preventDefault();
        $fieldVar = $("input[name='words[]']");        
        $("#createElementHandlerBox").siblings('.errorMsg').remove();
        if($.type($fieldVar.val()) === 'undefined'){
            $error.insertAfter($("#createElementHandlerBox"));            
            return false;
        }else{
            return true;
        }        
    });
    return this;
    
};

/* End of Suspected Words */

    $.fn.buttonLoader = function (action) {
        var self = $(this);
        //start loading animation
        if (action == 'start') {        
            $(self).attr("disabled", "disabled");
            $(self).attr('data-btn-text', $(self).text());
            $(self).html('<span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>Loading');
            $(self).addClass('active');
        }
        //stop loading animation
        if (action == 'stop') {
            $(self).html($(self).attr('data-btn-text'));
            $(self).removeClass('active');
            $(self).removeAttr("disabled");
        }
    };
    
    $.fn.readmore = function(options){
        var settings = $.extend({            
            showChar : 100,
            ellipsestext : "...",
            moretext : "Read More",
            lesstext : "Read Less"
        }, options );
        var obj = $(this);
        obj.each(function() {
            var content = $(this).html();
            if(content.length > settings.showChar) {
                var showingHtml = content.substr(0, settings.showChar);
                var hiddenHtml = content.substr(settings.showChar, content.length - settings.showChar);
                
                var html = '<span class="toptext">'+showingHtml + '</span><span class="moreellipses">' + settings.ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + hiddenHtml + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + settings.moretext + '</a></span>';
                $(this).html(html);
            }
	});
        $(".morelink").on('click',function(ev){
            $currentObj = $(ev.target);
            if($currentObj.hasClass("less")) {
                $currentObj.removeClass("less");
                $currentObj.html(settings.moretext);
            } else {
                $currentObj.addClass("less");
                $currentObj.html(settings.lesstext);
           }
           $currentObj.parent().prev().toggle();
            $currentObj.prev().toggle();
            
            return false;
	});
        return this;
    };
    
   /*Select parent menu if has siblinkg has class action in left menubar*/ 
    if($(".menuList li a").hasClass("active")){
       $(".menuList li a.active").parent().parent().addClass("in");
       $(".menuList li a.active").parent().parent().attr("aria-expanded",true);
    }
}(jQuery));

/* call of above function */
(function ($) {  
    $('.readtext').readmore();
}(jQuery));
/* convert field value in float */
jQuery.fn.setFloat = function() {
    var num = parseFloat($.trim($(this).val()));
    var num = num.toFixed(2);
    if(isNaN(num)) {
        num = '0.00';
    }
    return num;
}
/* Show alert */    
showAlert = function(title) {
    title = title ? title : 'Are you sure want to delete?';    
    var modal = $("#deleted");
    modal.find(".modal-body h3").html(title).end().modal();
};

/* Confirmation Dialog */
showConfirmation = function(callfunction,title,params) {
    title = title ? title : 'Are you sure want to delete?';
    var confirmed = false;
    var modal = $("#main_confirmation");
    modal.find(".modal-body h3").html(title).end()
        //.find(".modal-body h5").html(message).end()
        .find(".modal-body h5").html('').end()
        .modal({ backdrop: 'static', keyboard: false })
        .one('click', '#confirm,#cancel', function (e) {
            if($(this).attr('id') == 'cancel'){
                //callfunction(false);
            }else{          
                callfunction(params)              
             }
        });
};

/*
 * postAjax
 * @param {type} container
 * @returns {undefined}
 */

function postAjax(url,data,selector){ 
    var btns = $(selector);    
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {btns.buttonLoader('start');},
        success: function (response) {
            if (data != '' && data != 'undefined') {
                var dataArray = data.split('_');
                if (dataArray[0] == 'activate') {
                    var val = dataArray[1];
                    btns.buttonLoader('stop');
                    $('#status_' + val).html('Active');
                    $('#action_' + val).html('<span class="invactive"><a href="javascript:void(0);" title="Activate" class="edit disabled">Activate</a></span>');
                }
            } else {        
            btns.buttonLoader('stop');    
            $(".addNewRecord").removeClass('disabled').removeAttr('disabled');
            showAlert(response.message);
            $("input[name='spid']").prop('checked',false);
            }
        },
        error: function (jqXHR, exception) {
            btns.buttonLoader('stop');            
            if(jqXHR.responseText){
                showAlert($.parseJSON(jqXHR.responseText).message);
            }else{
                showAlert("Unexpected error, Please try again");
            }            
        }
    }); 
}
/* Tinymce editor */

tinyEditro = function(container){
    tinymce.init({
            selector: container,
            setup:function(ed) {
                ed.on('change', function(e) {                    
                    var content = ed.getContent().replace(/(<([^>]+)>)/ig,"");
                    if($("#"+$(this).attr('id')).attr("required") == 'required'){
                        $error = $('<div class="errorMsg"><span class="error">This field is required.</span></div>');
                    }else{
                        $error = $('<div class="errorMsg"><span class="error"></span></div>');
                    }
                    if(content.length > 0){ 
                        $(container).removeClass('invalid').closest('div').find('div.errorMsg').remove();
                        $(container).html(ed.getContent());
                        tinymce.triggerSave();
                    }else{ 
                        tinymce.triggerSave();
                        $(container).removeClass('invalid').closest('div').find('div.errorMsg').remove();
                        $(container).empty();
                        $(container).addClass('invalid');
                        $error.insertAfter($(container));
                    }
                });
            },
            plugins: [
              'advlist autolink lists link image charmap print preview anchor','textcolor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code'
            ],
            menubar: false,
            toolbar_items_size: 'small',
            toolbar: 'styleselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist forecolor backcolor | link unlink anchor',
            content_css: baseUrl+'assets/js/tinymce/skins/custom.css'
        });
};
function formValidate(formObj){ 
        var $form = formObj,
                $inputs = $form.find('[type="text"],[type="number"],[type="file"],[type="email"],select,textarea'); 
        
        var errorFlag = true;
        
        var filters = {            
            email: {
                regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/,
                error: 'Must be a valid e-mail address (user@gmail.com)'
            },
             digit: {
                //regex: /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/,
                regex: /^\d{1,}?$/,
                error: 'Enter valid no.(Numeric value is allowed only.)'
            },
            zip: {
                regex: /^\d{4,6}?$/,
                error: 'Enter valid zip code.'
            },
            phone: {
                regex: /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g,
                error: 'Enter valid phone no.'
            },
            float: {
                regex: /^\d*\.?\d*$/,
                error: 'Enter valid float value like 22.00,0.33'
            },
            url:{
                regex:/^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})?$/,
                error:'Enter valid url.'
            }
        };

        var validate = function (input, value) {
            var isValid = true,
                    error = '',
                    requiredType = input.attr('required'),
                    dataType = input.attr('data-type');
            
            if (input.attr('required') && $.trim(value).length <= 0 && $.type(requiredType) !== 'undefined') {
                error = 'This field is required';
                isValid = false;
            } else if($.trim(value).length > 0 ) {
                if($.type(dataType) !== 'undefined'){
                for (var f in filters) {
                    var regex = new RegExp(f);
                        if (regex.test(dataType)) {
                            if (value && !filters[f].regex.test(value)) {
                                error = filters[f].error;
                                isValid = false;
                            }
                            break;
                        }
                    }        
                }
                if(input.attr('maxsize')){
                    var maxsize = input.attr('maxsize');
                    if(($.trim(value)).length > maxsize){
                        error = 'Max length is '+maxsize;
                        isValid = false;
            }
                }
            }
            return {
                isValid: isValid,
                error: error
            }
        };

        var printError = function ($input) {
            var value = $input.val(),
                    test = validate($input, value),
                    $error = $('<div class="errorMsg"><span>' + test.error + '</span></div>');
            $input.removeClass('invalid').siblings('.errorMsg').remove();
            
            //$input.removeClass('invalid').closest('div.form-group').find('div.errorMsg').html('');
            if (!test.isValid) {
                errorFlag = test.isValid;
                $input.addClass('invalid');
                 $error.insertAfter($input);
            }
        };

        $inputs.change(function () {
                printError($(this));             
        });
         
        $inputs.each(function () {               
                printError($(this));
        });
        return errorFlag;
    };
    
    $.fn.activate = function (options) {
    $(this).on('click', function (e) {
        e.preventDefault();
        var val = $(this).data("value");
        var url = $(this).attr('href') + '/' + val;
        postAjax(url, 'activate_'+ val, $(this));
     });    
}