(function ($) {
    $.fn.quickValidate = function () {
        var $form = this,
                $inputs = $form.find('[type="text"],[type="number"],[type="file"],[type="email"],select,textarea');        
        
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
                error: 'Enter valid no.(Numeric value is allowed only.'
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
            //console.log($.trim(value));
             
            if (input.attr('required') && $.trim(value).length <= 0 && $.type(requiredType) !== 'undefined') {
                error = 'This field is required.';
                isValid = false;
            } else if($.trim(value).length > 0 ) {
                if($.type(dataType) !== 'undefined'){
                for (var f in filters) {
                    //console.log(f+" what "+dataType );
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
                    //$error = $('<span class="error">' + test.error + '</span>');
                    $error = $('<div class="errorMsg"><span class="error">' + test.error + '</span></div>');
            
            //$input.removeClass('invalid').siblings('.error').remove();
            $parentElem = $input.parent('div');
            $input.removeClass('invalid').closest('div').find('div.errorMsg').remove();
            
            if (!test.isValid) { 
                $input.addClass('invalid');
                //$error.insertAfter($input);
                $error.appendTo($parentElem);
                //$input.closest('div.form-group').find('div.errorMsg').html($error);
            }
        };

        $inputs.change(function () { 
            printError($(this));
        });
        $form.submit(function (e) {                
            $inputs.each(function () {                
                printError($(this));
                    
            });
            if ($form.find('.invalid').length) {
                e.preventDefault();
                return false;
            }
        });
        return this;
    };
    //$('#signup').quickValidate();
}(jQuery));
