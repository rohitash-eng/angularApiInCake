var trcopy;
var inputs = ':checked,:selected,:text,textarea,select';
(function ($) {
    
    /*For forum */
    $.fn.showForumField = function(){        
        
        $("#listTable .inputform").hide();
        
        $(this).on('click',function(){    
            $("#listTable").prepend(forumFeilds());
            $("#listTable .inputform").show();
            $(this).hide();
            $('.rowchkbox').prop('disabled',true);
            $('.addnew').show(); 
        });    
    };
    $.fn.saveForum = function () {
        $(this).on('click',function(){ 
            if(!formValidate($('#liveForm'))){
                return false;
            }
            var  formparams = $("#liveForm").serialize();
            postAssync('addNew',formparams,forumRow);
        });        
    };
    
    $.fn.editForum = function(){
        $(this).on('click',function(){
            var editRow = $("input[name='spid']:checked");
            if(editRow.length <= 0 || editRow.length > 1){ 
                showAlert('Please select single record to edit.');
                return false;
            }
            var id = editRow.val();
            $(this).hide();
            $("#updatebtn").show();
            $(".removeBtn").attr("disabled", "disabled");
            $('.rowchkbox').prop('disabled',true);            
            var editHtml = forumFeilds('update',id);
            trcopy = $("#listTable tr[id="+id+"]").html();
            $("#listTable tr[id="+id+"]").html(editHtml);
            $('input[name="spid"][value="'+id+'"]').prop('checked',true);
        });
    };
    
    $.fn.updateForum = function(){
        $(this).on('click',function(){
            //if(!formValidate($('#liveForm'))){ 
            //    return false;
            //}
            var id = $("input[name='spid']:checked").val();
            var $inputs =
            $(document).find("#listTable").find(inputs).filter(function() {
                return $.trim( this.value );
            });            
            serialized = $inputs.serialize();
            postAssync('update',serialized+"&id="+id,forumRow);
        });
    }
    
    forumRow = function(action,ajax){
        var seclastRow = $("#listTable tr").length;
        rowHtml = '<td><label class="control control--checkbox"><input type="checkbox" class="readchk rowchkbox" name="spid" value="'+ajax.id+'"><span class="control__indicator"></span></label></td>';
        for(i=0;i<columns.length;i++){
            if(columns[i]=='provider_type_id'){
                rowHtml += '<td class="t' + columns[i] + '"><div class="comments readtext">' + provider_type_id_option[ajax[columns[i]]] + '</div></td>';
            }else if(columns[i]=='age_group_id'){
                rowHtml += '<td class="t' + columns[i] + '"><div class="comments readtext">' + age_group_id_option[ajax[columns[i]]] + '</div></td>';
            }else{
                rowHtml += '<td class="t' + columns[i] + '"><div class="comments readtext">' + ajax[columns[i]] + '</div></td>';
            }
        }
        rowHtml += '<td class="tcmcount"><div class="comments "><div class="Scheduled"><div><a data-toggle="collapse" data-parent="#accordion" href="#showcomments'+ajax.id+'" aria-expanded="true" aria-controls="showcomments'+ajax.id+'" class="forumComments" data-pid="'+ajax.id+'">0</a></div></div><div class="Scheduled"><div><span href="#">0 Flagged</span></div></div></div></td>';
        rowTwoHtml = '<tr id="showcomments'+ajax.id+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingtwo"><td colspan="6"></td></tr>';
        // Append new row as a second last row of a table
        if(action=="update"){
            $('#listTable tr[id="' + ajax.id +'"]').html(rowHtml);
        }else{
            $("#listTable .inputform").after('<tr id="' + ajax.id + '">' + rowHtml + '</tr>'+rowTwoHtml);
        }
        $("#listTable tr:nth-child(" + seclastRow + ")").find('td').wrapInner('<div style="display: none;" />').parent().find('td > div').slideDown(700, function () {
            var $set = $(this);
            $set.replaceWith($set.contents());
        });
       $('.readtext').readmore();
    };
    
    forumFeilds = function(formtype,rowid){
        if(formtype=='update'){
            forumField = '<td>'+$('#listTable tr[id="'+rowid+'"] td:first-child').html()+'</td>';
            forumField += '<td colspan="6" class="ajaxReq">';
            
        }else{
            forumField = '<tr class="inputform"><td colspan="7" class="ajaxReq">';
        }
                 
        forumField += '<div class="row forum-form">';
        for(i=0;i<columns.length;i++){
            if(i==3){
                forumField += '<div class="clearfix"></div>';
            }
            forumField += '<div class="form-group col-sm-4">';
            forumField += '<label>'+placeholder[i]+'</label>';
            if(formtype=='update'){
                var val = $(document).find('#listTable tr[id="'+rowid+'"] td[class="t'+columns[i]+'"] div').text();
                forumField += createInput(i,val);   
            }else{
                forumField += createInput(i,'');
            }
            forumField += '</div>';
        }
        forumField += '</div>';
        return forumField;
    };
    /*End of Forum*/
    /* subadmin live edit*/
    $.fn.showField = function(){
        var blankrow = '<tr valign="top" class="inputform"><td></td>';
        for(i=0;i<columns.length;i++){
                // Create input element as per the definition
                input = createInput(i,'');
                blankrow += '<td class="ajaxReq">'+input+'</td>';
        }
        //console.log(blankrow+" kl");
        //$("#listTable .inputform").hide();
        
        $(this).on('click',function(){
            //console.log(blankrow);
            //$('#listTable').find("tbody:tr(0)").append(blankrow);
            $("#listTable").prepend(blankrow);
            //$("#listTable .inputform").show();
            $(this).hide();
            $('.rowchkbox').prop('disabled',true);
            $('.addnew').show(); 
        });    
    };
    
    $.fn.saveData = function () {
        $(this).on('click',function(){ 
            if(!formValidate($('#liveForm'))){
                return false;
            }
            postAssync('addNew',$("#liveForm").serialize());
            
        });        
    };
    
    $.fn.deleteRows = function(slug){
        $(this).on('click',function(){ 
            var rowIds = [];
            $.each($("input[name='spid']:checked"), function(){
                    rowIds.push($(this).val());
            });
            if(rowIds.length <= 0){ 
                showAlert('Please select record to delete.');
                return false;
            }
            showConfirmation(removeItems,'Are you sure want to delete?',{'ids':rowIds,'slug':slug});            
        });
    };
    
    $.fn.updateField = function(){
        $(this).on('click',function(){
            var editRow = $("input[name='spid']:checked");
            if(editRow.length <= 0 || editRow.length > 1){ 
                showAlert('Please select single record to edit.');
                return false;
            }
            var id = editRow.val();
            $(this).hide();
            $("#updatebtn").show();
            $(".removeBtn").attr("disabled", "disabled");
            $('.rowchkbox').prop('disabled',true);
            var html;
            html += '<td>'+$('#listTable tr[id="'+id+'"] td:first-child').html()+'</td>';
            for(i=0;i<columns.length;i++){
                // fetch value inside the TD and place as VALUE in input field
                var val = $(document).find('#listTable tr[id="'+id+'"] td[class="t'+columns[i]+'"] div').text();
                input = createInput(i,val);
                html +='<td class="t'+columns[i]+'">'+input+'</td>';
            }
            trcopy = $("#listTable tr[id="+id+"]").html();
            $("#listTable tr[id="+id+"]").html(html);
            $('input[name="spid"][value="'+id+'"]').prop('checked',true);
        });
    };
    
    $.fn.updateRow = function(){
        $(this).on('click',function(){
            if(!formValidate($('#liveForm'))){
                return false;
            }
            var id = $("input[name='spid']:checked").val();
            var $inputs =
            $(document).find("#listTable").find(inputs).filter(function() {
                return $.trim( this.value );
            });
            serialized = $inputs.serialize();
            postAssync('update',serialized+"&id="+id);
        });
    };
    
    var removeItems = function(params){
        postAssync('remove',params);
    };
    /*End of subadmin*/
    /* Specialities live edit */
    $.fn.addMore = function () {
        $(this).on('click',function(){
            $('table#listTable').find('tbody tr:first').show('slow');
            $(this).hide();
            $('.rowchkbox').prop('disabled',true);
            $('.addnew').show();            
        });
    };
    
    $.fn.saveRecord = function () {
        $(this).on('click',function(){ 
            if(!formValidate($('#liveForm'))){
                return false;
            }
            $.post(baseUrl+'admin/specialities/add',$("#liveForm").serialize(),function(response){
                if(response.status == true){
                    var spid = $.trim(response.id);
                    var trHtml = createRow(spid,$("#title").val(),$("#provider_type_id").val(),$("#provider_type_id option:selected").text(),$("#scheduled_price").val(),$("#on_demand_price").val(),$("#concierge_price").val());
                    $("#listTable #addrow").after(trHtml);
                    document.getElementById('liveForm').reset();
                    $('table#listTable').find('tbody tr:first').hide('slow');
                    $('.rowchkbox').prop('disabled',false);
                    $(".addnew").hide();
                    $("#addbtn").show();
                    $("#deleted").find('h3').text(response.message);
                }else{
                    $("#deleted").find('h3').text(response.message);                    
                }
                $('#deleted').modal('show');
            },'json');
           
        });
        
    };
    
    $.fn.editRecord = function(){
        $(this).on('click',function(){            
            var rowCount = $("input[name='spid']:checked").length;
            if(rowCount <= 0 || rowCount > 1){ 
                showAlert('Please select single record to edit.');
                return false;
            }
            $(this).hide();
            $("#updatebtn").show();
            $(".removeBtn").attr("disabled", "disabled");
            $('.rowchkbox').prop('disabled',true);
            $.each($("input[name='spid']:checked"), function(){ 
                var rowId = $(this).val();
                $("#title_"+rowId).html('<input type="text" class="form-control" name="data['+rowId+'][title]" value="'+$("#title_"+rowId).text()+'" required="required" />');
                $("#ptt_"+rowId).html('<select class="form-control" name="data['+rowId+'][provider_type_id]"  required="required">'+listOption(providers,$("#ptt_"+rowId).attr('data-pp'))+'</select>');
                
                $("#sp_"+rowId).html('<input class="form-control" data-type="float" type="text" name="data['+rowId+'][scheduled_price]" value="'+ $("#sp_"+rowId).text()+'"  required="required" />');
                $("#odp_"+rowId).html('<input class="form-control" data-type="float" type="text" name="data['+rowId+'][on_demand_price]" value="'+ $("#odp_"+rowId).text()+'"  required="required" />');
                $("#cp_"+rowId).html('<input class="form-control" data-type="float" type="text" name="data['+rowId+'][concierge_price]" value="'+ $("#cp_"+rowId).text()+'"  required="required" />');
            });
        });
        
    };
    
    $.fn.updateRecord = function(){
        $(this).on('click',function(){ 
            //if(!formValidate($('#liveForm'))){ 
            //    return false;
            //}
            $.post(baseUrl+'admin/specialities/update',$("#liveForm").serialize(),function(response){
                if(response['status'] == true){
                    $.each($("input[name='spid']:checked"), function(){
                        var tdelem = $(this).val(); 
                        var pid = $("[name='data["+tdelem+"][provider_type_id]']").val();
                        var pidString = providerText(pid,providers);
                        $("#ptt_"+tdelem).attr('data-pp',pid).html('').text(pidString);
                        $("#title_"+tdelem).html($("[name='data["+tdelem+"][title]']").val());
                        $("#sp_"+tdelem).html($("[name='data["+tdelem+"][scheduled_price]']").val());
                        $("#odp_"+tdelem).html($("[name='data["+tdelem+"][on_demand_price]']").val());
                        $("#cp_"+tdelem).html( $("[name='data["+tdelem+"][concierge_price]']").val());
                    });
                    $(".rowchkbox").prop('checked',false);
                    $("#updatebtn").hide();
                    $("#editbtn").show();
                    $(".rowchkbox").prop("disabled", false);
                    $(".addNewRecord").removeAttr("disabled");
                    $(".removeBtn").removeAttr("disabled");
                    showAlert("Record has been updated successfully.");
                    
                }else{
                    
                }
            },'json');
        });
    };
    
    var createRow = function(spid,title,ppid,ptype,sp,odp,cp){
        var trHtml = '<tr id="'+spid+'">';
            trHtml += '<td><label class="control control--checkbox"><input type="checkbox" class="readchk rowchkbox" name="spid" value="'+spid+'"><span class="control__indicator"></span></label></td>';
            trHtml += '<td><div class="generalHealth" id="title_'+spid+'">'+title+'</div></td>';
            trHtml += '<td><div class="psyschiatrist" id="ptt_'+spid+'" data-pp="'+ppid+'">'+ptype+'</div></td>';
            trHtml += '<td><div class="view">';
            trHtml += '<div class="Scheduled"><div>Scheduled:</div><div>$</div><div id="sp_'+spid+'">'+sp+'</div></div>';
            trHtml += '<div class="Scheduled"><div>On Demand:</div><div>$</div><div id="odp_'+spid+'">'+odp+'</div></div>';
            trHtml += '<div class="Scheduled"><div>Concierge:</div><div>$</div><div id="cp_'+spid+'">'+cp+'</div></div>';
            trHtml += '</div></td></tr>';
            return trHtml;
    };
    
    var listOption = function(options,val){
            var s = '';
            $.each(options,function(index,value){
                var selected = ((index == val) ||(value == val))?'selected="selected"':'';
                s += '<option value="'+index+'" '+selected+'>'+value+'</option>';                
            });            
            return s;            
        };
    
    var providerText = function(id,options){ 
            var idval = '';
            $.each(options,function(index,value){
                if(parseInt(id) === parseInt(index)){ //console.log(id+" == "+index);
                    idval = value;
                }
            });
            return idval;
        };
        
    /* End of Specialities*/  
    
    /* Function description */
    selectAll = function(){
        $(document).on('change',"#selectall",function(){
            var status = this.checked;
            $('.readchk').each(function(){
                this.checked = status; //change ".checkbox" checked status
            });
        });

        $(document).on('change','.rowchkbox',function(){
            if(this.checked == false){ 
                $("#selectall")[0].checked = false;
            }
            if ($('.readchk:checked').length == $('.readchk').length ){
                $("#selectall")[0].checked = true;
            }
            if($('.readchk:checked').length > 0){
                $(".addNewRecord").attr("disabled", "disabled");
                $("#addFrmBtn").addClass("disabled");
            }else{
                $(".addNewRecord").removeAttr("disabled");
                $("#addFrmBtn").removeClass("disabled");
            }
        });
        
    };    
    createInput = function (i, str) {
        str = typeof str !== 'undefined' ? str : null;
        if (inputType[i] == "text") {
            input = '<input type="' + inputType[i] + '" name="' + columns[i] +'" placeholder="' + placeholder[i] + '" value="' + str + '" class="form-control ui" required="true">';
        } else if (inputType[i] == "textarea") {
            input = '<textarea name=' + columns[i] + ' placeholder="' + placeholder[i] + '" class="form-control ui" required="true">' + str + '</textarea>';
        } else if (inputType[i] == "select") {
            var options = eval(columns[i]+"_option");            
            input = '<select name="'+ columns[i]+'" class="form-control ui" required="required">';
            input += '<option value="">Select '+placeholder[i]+'</option>';
            input += listOption(options,str)                     
            input += '</select>';
            //console.log(str);
        }
        return input;
    };
    
    postAssync = function (action,params,recallback) {
        var url = $("#liveForm").attr('action').split('?');        
        url = url[0]+'/'+action    
        $.ajax({
            type: "POST",
            url: url,
            data: params,
            dataType: "json",
            success: function (response) {
                $(".addNewRecord").removeAttr("disabled");
                switch (action) {
                    case "addNew":
                        if (response.status == true) {
                            $("#norecord").remove();
                            if(recallback){
                                recallback(params,response);
                            }else{ 
                               var seclastRow = $("#listTable tr").length; 
                               var html = '';
                                html += '<td><label class="control control--checkbox"><input type="checkbox" class="readchk rowchkbox" name="spid" value="'+response.id+'"><span class="control__indicator"></span></label></td>';
                                for (i = 0; i < columns.length; i++) {
                                    html += '<td class="t' + columns[i] + '"><div class="group-name">' + response[columns[i]] + '</div></td>';
                                }                        
                                // Append new row as a second last row of a table
                                $("#listTable .inputform").after('<tr id="' + response.id + '">' + html + '</tr>');
                                $("#listTable tr:nth-child(" + seclastRow + ")").find('td')
                                        //.wrapInner('<div style="display: none;" />')
                                        .parent()
                                        .find('td > div')
                                        .slideDown(700, function () {
                                            var $set = $(this);
                                            $set.replaceWith($set.contents());
                                        });
                                
                            }
                            // Blank input fields
                            document.getElementById('liveForm').reset();
                            $(document).find('#listTable').find('tbody tr:first').remove();
                            $('.rowchkbox').prop('disabled',false);
                            $(".addnew").hide();
                            $("#addbtn").show();
                            showAlert(response.message); 
                        }else{
                            showAlert(response.message);
                        }                    
                        break;
                    case "remove":
                        if (response.status == true) {                            
                            var rowIds = params.ids;
                            for(var i=0;i < rowIds.length;i++){
                                $("#listTable tr[id='" + rowIds[i] + "']").animate({ opacity: "hide" },'slow').remove();
                            }                            
                            showAlert(response.message);
                             /* code start for remove, redirect on previous page if all record has been deleted on current page @604*/
                            var rowCount = $('#listTable tbody tr').length;
                            if (rowCount < 1) {
                                var url = window.location.href;
                                var lastChar = url.substr(url.length - 1);
                                var page = lastChar - 1;
                                if ($.isNumeric(page) && page > 0) {
                                    url = url.slice(0, -1);
                                    url += page;                                    
                                } else { 
                                    url = url.substring(0, url.indexOf('?'));
                                }
                                window.location.href = url;

                            }
                            /* code end for remove, redirect on previous page if all record has been deleted on current page @604*/
                            $("#selectall").prop('checked',false);                        
                        }
                        break;
                    case "update": 
                        if (response.status == true) {
                            if(recallback){
                                recallback('update',response);
                            }else{ 
                                for (i = 0; i < columns.length; i++) {
                                   $('#listTable tr[id="' + response.id +'"] td[class="t'+columns[i]+'"]').html('<div class="group-name">'+response[columns[i]]+'</div>');                                   
                                }
                            }
                            $(".rowchkbox").prop('checked',false);
                            $("#updatebtn").hide();
                            $("#editbtn").show();
                            $(".rowchkbox").prop("disabled", false);
                            showAlert(response.message);
                        }else{
                            showAlert(response.message);
                        }
                        $(".addNewRecord").removeAttr("disabled");
                        $(".removeBtn").removeAttr("disabled");
                        break;
                }
            },
            error: function () {
                showAlert("Unexpected error, Please try again.");
            }
        });
    };
 
   
}(jQuery));