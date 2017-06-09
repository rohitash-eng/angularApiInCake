$iesQuery = jQuery.noConflict();

/* Used to implement form builder */
if (typeof $iesQuery == 'undefined') {

    // This code won't be used in most cases. This code is for preventing problems in wrong WP themes and conflicts with third party plugins.
    document.write("<" + "script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.20/jquery-ui.min.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='js/jQuery.stringify.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='js/jquery.validate.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='js/fbuilderf.jquery.js'></" + "script>");
}

$iesQuery(document).ready(function () {

    var f = $iesQuery("#fbuilder").fbuilder();
    f.fBuild.loadData("form_structure");

    $iesQuery("#saveForm").click(function () {
        f.fBuild.saveData("form_structure");
    });

    $iesQuery(".itemForm").click(function () {
        f.fBuild.addItem($iesQuery(this).attr("id"));
    });

    $iesQuery(".itemForm").draggable({revert1: "invalid", helper: "clone", cursor: "move"});
    $iesQuery("#fbuilder").droppable({
        accept: ".button",
        drop: function (event, ui) {
            f.fBuild.addItem(ui.draggable.attr("id"));
        }
    });




    /* Used to validate and save form data */
    $iesQuery("#forms-dynamic-data").validate({
        rules: {
            form_name: {
                required: true,
                maxlength: 128
            }

        },
        messages: {
            form_name: {
                required: "This field is required.",
                maxlength: "Form name cannot be too long.",
            }
        },
        submitHandler: function (form) {
            var errorMsg = null;
            var result = null;
            var prevFormName = $iesQuery('#check-form-name').val();
            var prevFormData = $iesQuery('#check-form-data').val();

            var formName = $iesQuery('#form-name-duplicate-check').val();
            var formData = $iesQuery('#form_structure').val();
            var formId = $iesQuery('#form-id-duplicate-check').val();
            
            var str = $('#form_structure').val();
            
            //check user edit field title or not
            if( 1 < str.search('"title":"Untitled"')){
                errorMsg = "Please change default field title ('Untitled')";
                result = false;
                
            }
            
            if(1 < str.search('"title":"Select a Choice"')){
                errorMsg = "Please change default field title ('Select a Choice')";
                result = false;
            }
            
            if(1 < str.search('"title":"Check All That Apply"')){
                errorMsg = "Please change default field title ('Check All That Apply')";
                result = false;
            }
            
            if(1 < str.search('"title":""')){
                errorMsg = "Fields title can not be blank.";
                result = false;
            }
            
            if(false === result) {
                $('#form_structure_error').show();
                $('#form_structure_error').text(errorMsg);
                return result;
            }
            
            $iesQuery.ajax({
                url: baseUrl + "admin/ScreeningForms/checkDuplicateFormName/" + formName + '/' + formId,
                success: function (result) {
                    var resultResponse = jQuery.parseJSON(result);
                    if (resultResponse.result === true) {
                        $('#form-name-duplicate').text(resultResponse.message);
                        $('#form-name-duplicate').show();
                        $("#forms-dynamic-data").off('submit');
                    } else {
                        if (prevFormName === formName && prevFormData === formData) {
                            $("#myModalCheckForm").modal("show");
                        } else {
                            $("#forms-dynamic-data").submit();
                        }
                    }
                }
            });
        }
    });

    /* Used to validate and copy form data*/
    $iesQuery("#copy-form-data").validate({
        rules: {
            form_id: "required",
        },
        messages: {
            form_id: "Please select atleast one form before copy.",
        },
        ignore: [],
        submitHandler: function (form) {
            var formName = $iesQuery('#form-name-for-copy').val();
            var formId = $iesQuery('#form-id-for-copy').val();
            $iesQuery.ajax({
                url: baseUrl + "admin/ScreeningForms/checkDuplicateFormName/" + formName + '/' + formId,
                success: function (result) {
                    var resultResponse = jQuery.parseJSON(result);
                    if (resultResponse.result === true) {
                        $('#form-name-copy-duplicate').text(resultResponse.message);
                        $("#copy-form-data").off('submit');
                    } else {
                        $("#copy-form-data").submit();
                    }
                }
            });
        }
    });
});

/* Used to open the edit fields setting pop up */
$iesQuery(document).on('click', '.edit', function () {
    $('.field_setting_modal').modal('show');
});

/* Used to render new issue type listing while sorting */

$iesQuery(document).on('click', '.sortting-common-span', function () {
    var type = $iesQuery(this).attr('type');
    var order = $iesQuery(this).attr('order');
    var formId = "";
    
    $('input.select-form-radio-button[type=radio]').each(function () {
        if (this.checked) {
            formId = (formId !== '') ? formId + ',' + $(this).val() : $(this).val();
        }
    });
    
    //Active and Inactive sorting tab
    $iesQuery('.screening-form-link-highlight').removeClass('active');
    $iesQuery(this).addClass('active');

    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/getSortedDropdown/"+ order + '/' + formId,
        success: function (result) {
            $("#" + type + '-dropdown-data').html(result);
        }
    });
});


/* Used to change value while selecting forms radio button */

$iesQuery(document).on('change', '.set-form-values', function () {
    $iesQuery('#form-id-for-copy').val($iesQuery(this).val());
    $iesQuery('#form-name-for-copy').val('Copy of ' + $iesQuery(this).prev().text());
});

/* Used to render new form */

$iesQuery(document).on('change', '.renderd-forms', function () {
    var newHref = baseUrl + "admin/ScreeningForms/add/" + $(this).val();
    $iesQuery('.load-previous-record').attr('href', newHref);
});


/****************************Inquiry Type add, edit and delete********************************/

/* Used to delete the selected inquiry type */
$iesQuery('.select-edit-inquiry-type').on('change', function () {
    var radioText = $(this).children(':selected').text();
    var radioValue = $(this).val();
    var deleteHref = baseUrl + "admin/ScreeningForms/deleteInquiryType/" + radioValue;
    if (radioText != 'Select') {
        $iesQuery('#inquiry-type-name').val(radioText);
        $iesQuery('#inquiry-type-id').val(radioValue);
        $iesQuery('#submit-inquiry-type-form').val('Update');
        $iesQuery('.delete-inquiry-type').attr('href', deleteHref);
    } else {
        $iesQuery('#inquiry-type-name').val("");
        $iesQuery('#inquiry-type-id').val("");
        $iesQuery('#submit-inquiry-type-form').val('Add');
        $iesQuery('.delete-inquiry-type').attr('href', 'javascript:void(0)');
    }
});

/* Used to validate and save issue type data */
$iesQuery("#inquiry-type-form-data").validate({
    rules: {
        name: {
            required: true,
            maxlength: 128
        }

    },
    messages: {
        name: {
            required: "This field is required.",
            maxlength: "Issue name cannot be too long.",
        }
    },
    submitHandler: function (form) {
        var inquiryTypeName = $iesQuery('#inquiry-type-name').val();
        var inquiryTypeId = $iesQuery('#inquiry-type-id').val();
        $iesQuery.ajax({
            url: baseUrl + "admin/ScreeningForms/checkDuplicateInquiryType/" + inquiryTypeName + '/' + inquiryTypeId,
            success: function (result) {
                var resultResponse = jQuery.parseJSON(result);
                if (resultResponse.result === true) {
                    $('#inquiry-type-name-duplicate').text(resultResponse.message);
                    $('#inquiry-type-name-duplicate').show();
                    $("#inquiry-type-form-data").off('submit');
                } else {
                    $("#inquiry-type-form-data").submit();
                }
            }
        });
    }
});

/****************************End of Inquiry Type add, edit and delete functionality********************************/

/****************************Inquiry add, edit and delete functionality********************************/

/* Used to delete the selected inquiry type */
$iesQuery(document).on('change', '.select-edit-inquiry', function () {
    var radioText = $(this).children(':selected').text();
    var radioValue = $(this).val();
    var deleteHref = baseUrl + "admin/ScreeningForms/deleteInquiry/" + radioValue;
    if (radioText != 'Select') {
        $iesQuery('#inquiry-name').val(radioText);
        $iesQuery('#inquiry-id').val(radioValue);
        $iesQuery('.select-inquiry-on-edit').val('Update');
        $iesQuery('.delete-inquiry').attr('href', deleteHref);
    } else {
        $iesQuery('#inquiry-name').val("");
        $iesQuery('#inquiry-id').val("");
        $iesQuery('.select-inquiry-on-edit').val('Add');
        $iesQuery('.delete-inquiry').attr('href', 'javascript:void(0)');
    }
});

/* Used to validate and save issue type data */
$iesQuery("#inquiry-form-data").validate({
    rules: {
        name: {
            required: true,
            maxlength: 128
        },
        inquiry_type_id: {
            required: true
        }

    },
    messages: {
        name: {
            required: "This field is required.",
            maxlength: "Issue name cannot be too long.",
        },
        inquiry_type_id: {
            required: "This field is required."
        }
    },
    submitHandler: function (form) {
        var inquiryName = $iesQuery('#inquiry-name').val();
        var inquiryId = $iesQuery('#inquiry-id').val();
        var inquiryTypeId = $iesQuery('#inquiry-type-check-id').val();

        $iesQuery.ajax({
            url: baseUrl + "admin/ScreeningForms/checkDuplicateInquiry/" + inquiryName + '/' + inquiryTypeId + '/' + inquiryId,
            success: function (result) {
                var resultResponse = jQuery.parseJSON(result);
                if (resultResponse.result === true) {
                    $('#inquiry-name-duplicate').text(resultResponse.message);
                    $('#inquiry-name-duplicate').show();
                    $("#inquiry-form-data").off('submit');
                } else {
                    $("#inquiry-form-data").submit();
                }
            }
        });
    }
});

//render inquiry dropdown from inquiry type
$iesQuery('#inquiry-type-check-id').on('change', function () {
    var selectValue = $(this).val();
    if (selectValue != '') {
        $iesQuery.ajax({
            url: baseUrl + "admin/ScreeningForms/renderInquiryDropdown/" + selectValue,
            success: function (result) {
                $('.render-inquiry-dropdown').html(result);
            }
        });
    }
});

//render inquiry dropdown from inquiry type
$iesQuery(document).on('change', '.select-inquiries-from-type', function () {
    render_inquiry_options();
});

//call when page load and select inquiries
render_inquiry_options();
autoSelectInquiries();

function render_inquiry_options() {
    var inquiryTypeIds = '';
    var inquiryIds = '';
    var order = 'ASC';
    
    $('input.select-inquiries-from-type[type=checkbox]').each(function () {
        if (this.checked) {
            inquiryTypeIds = (inquiryTypeIds != '') ? inquiryTypeIds + ',' + $(this).val() : $(this).val();
        }
    });
    
    $('input.all-selected-inquiries[type=checkbox]').each(function () {
        if (this.checked) {
            inquiryIds = (inquiryIds != '') ? inquiryIds + ',' + $(this).val() : $(this).val();
        }
    });
    
    //check selection is none
    inquiryIds = ($('#edit-inquiries-ids').val() != '') ? $('#edit-inquiries-ids').val()  : inquiryIds;
    inquiryTypeIds = (inquiryTypeIds != '') ? inquiryTypeIds  : "0";
    
    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderInquiryOptions/" + order + '/' + inquiryTypeIds + '/' + inquiryIds,
        success: function (result) {
            $('#render-inquiries-dropdown-data').html(result);
        }
    });
}

$iesQuery(document).on('click', '.category-sorting-common-span', function () {
    var type = $iesQuery(this).attr('type');
    var order = $iesQuery(this).attr('order');
    var categoryIds = '';
    $('input.set-categories-form-values[type=checkbox]').each(function () {
        if (this.checked) {
            categoryIds = (categoryIds != '') ? categoryIds + ',' + $(this).val() : $(this).val();
        }
    });

    //Active and Inactive sorting tab
    $iesQuery('.categries-link-highlight').removeClass('active');
    $iesQuery(this).addClass('active');

    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderCategoriesOptions/" + order + '/' + categoryIds,
        success: function (result) {
            $("#category-dropdown-data").html(result);
        }
    });
});

//sort all inquiries types 
$iesQuery(document).on('click', '.inquiry-type-sorting-common-span', function () {
    var order = $iesQuery(this).attr('order');
    var inquiryTypeIds = '';

    $('input.select-inquiries-from-type[type=checkbox]').each(function () {
        if (this.checked) {
            inquiryTypeIds = (inquiryTypeIds != '') ? inquiryTypeIds + ',' + $(this).val() : $(this).val();
        }
    });

    //Active and Inactive sorting tab
    $iesQuery('.inquiry-type-sorting-common-span').removeClass('active');
    $iesQuery(this).addClass('active');

    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderInquiryTypeOptions/" + order + '/' + inquiryTypeIds,
        success: function (result) {
            $("#inquiry-type-dropdown-data").html(result);
        }
    });
});

//sort all inquiries according to inquires tyoes
$iesQuery(document).on('click', '.inquiry-sorting-common-span', function () {
    var order = $iesQuery(this).attr('order');
    var inquiryTypeIds = '';
    var selectedInquiriesId = '';

    $('input.select-inquiries-from-type[type=checkbox]').each(function () {
        if (this.checked) {
            inquiryTypeIds = (inquiryTypeIds !== '') ? inquiryTypeIds + ',' + $(this).val() : $(this).val();
        }
    });

    $('input.all-selected-inquiries[type=checkbox]').each(function () {
        if (this.checked) {
            selectedInquiriesId = (selectedInquiriesId !== '') ? selectedInquiriesId + ',' + $(this).val() : $(this).val();
        }
    });

    //Active and Inactive sorting tab
    $iesQuery('.inquiry-sorting-common-span').removeClass('active');
    $iesQuery(this).addClass('active');
    
    if (inquiryTypeIds !== '') {
        $iesQuery.ajax({
            url: baseUrl + "admin/ScreeningForms/renderInquiryOptions/" + order + '/' + inquiryTypeIds + '/' + selectedInquiriesId,
            success: function (result) {
                $("#render-inquiries-dropdown-data").html(result);
            }
        });
    }
});

$iesQuery(document).on('click', '.consult-type-sorting-common-span', function () {
    var type = $iesQuery(this).attr('type');
    var order = $iesQuery(this).attr('order');
    var consultIds = '';
    $('input.select-consult-from-type[type=checkbox]').each(function () {
        if (this.checked) {
            consultIds = (consultIds != '') ? consultIds + ',' + $(this).val() : $(this).val();
        }
    });

    //Active and Inactive sorting tab
    $iesQuery('.consult-link-highlight').removeClass('active');
    $iesQuery(this).addClass('active');

    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderConsultTypeOptions/" + order + '/' + consultIds,
        success: function (result) {
            $("#render-consult-type-dropdown-data").html(result);
        }
    });
});

function autoSelectInquiries() {
    var order = $iesQuery(this).attr('order');
    var order = 'ASC';
    var inquiryTypeIds = '';
    var selectedInquiriesId = $('#edit-inquiries-ids').val();

    $('input.select-inquiries-from-type[type=checkbox]').each(function () {
        if (this.checked) {
            inquiryTypeIds = (inquiryTypeIds !== '') ? inquiryTypeIds + ',' + $(this).val() : $(this).val();
        }
    });

    //Active and Inactive sorting tab
    $iesQuery('.form-details').removeClass('active');
    $iesQuery(this).addClass('active');
    if (inquiryTypeIds !== '') {
        $iesQuery.ajax({
            url: baseUrl + "admin/ScreeningForms/renderInquiryOptions/" + order + '/' + inquiryTypeIds + '/' + selectedInquiriesId,
            success: function (result) {
                $("#render-inquiries-dropdown-data").html(result);
            }
        });
    }
}

//Render all dropdown when user select form 
$iesQuery(document).on('change', '.select-form-radio-button', function () {
    var formId = $(this).val();
    if (formId !== '') {
      $iesQuery.ajax({
          url: baseUrl + "admin/ScreeningForms/renderFormsCategories/" + formId,
          success: function (result) {
              $("#category-dropdown-data").html(result);
              renderInquiryTypeFromForm(formId);
          }
      });
    }
});

//render inquiry type from form seletion

function renderInquiryTypeFromForm(formId){
    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderInquiryTypeFromForm/" + formId,
        success: function (result) {
            $("#inquiry-type-dropdown-data").html(result);
            renderInquiryFromForm(formId);
        }
    });
}

function renderInquiryFromForm(formId) {
    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderInquiryFromForm/" + formId,
        success: function (result) {
            $('#render-inquiries-dropdown-data').html(result);
            renderConsultTypeFromForm(formId);
        }
    });
}

function renderConsultTypeFromForm(formId) {
    $iesQuery.ajax({
        url: baseUrl + "admin/ScreeningForms/renderConsultTypeFromForm/" + formId,
        success: function (result) {
            $('#render-consult-type-dropdown-data').html(result);
        }
    });
}

/* Used to validate and copy form data*/
$iesQuery("#forms-data1").validate({
    rules: {
        form_id: "required",
    },
    messages: {
        form_id: "Please select at least one form before load.",
    },
    ignore: [],
});

