(function ($) { 
    $( "#adminSignin" ).submit(function( event ) { 
        var error = '<span class="error">This is required field.</span>';
        var chkValid = true;
        var regex =  /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if(!$("#password").val()){
            $("#password").closest('div.form-group').find('div.errorMsg').html(error);
            chkValid = false;
        }
        
        if(!$("#username").val()){
            $("#username").closest('div.form-group').find('div.errorMsg').html(error);
            chkValid = false;
        }else if(!regex.test($("#email").val())){
            //$("#email").closest('div.form-group').find('div.errorMsg').html('<span>Enter valid email id.</span>');
            //chkValid = false;
        }
        
        $("#username,#password").keyup(function () {
            if($(this).val()){
                $(this).closest('div.form-group').find('div.errorMsg').html("");
            }
        });
        if(!chkValid){
            return false;
        }
        
    });
}(jQuery));