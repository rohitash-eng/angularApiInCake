$iesQuery = jQuery.noConflict();
if (typeof $iesQuery == 'undefined') {

    // This code won't be used in most cases. This code is for preventing problems in wrong WP themes and conflicts with third party plugins.
    document.write("<" + "script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.20/jquery-ui.min.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='js/jQuery.stringify.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='js/jquery.validate.js'></" + "script>");
    document.write("<" + "script type='text/javascript' src='js/fbuilderf.jquery.js'></" + "script>");
}

/* Used to open the edit fields setting pop up */
$iesQuery(document).on('click', '.edit', function () {
    $('.field_setting_modal').modal('show');
});



/* Used to render new issue type listing while sorting */

$iesQuery(document).on('click', '.sortting-common-span', function () {
    var type = $iesQuery(this).attr('type');
    var order = $iesQuery(this).attr('order');
    var formId = $iesQuery('.set-form-values:checked').val();
    formId = (typeof (formId) === 'undefined') ? "" : formId;

    //Active and Inactive sorting tab
    if (type == 'issue') {
        $iesQuery('.issue-type-details').removeClass('active');
    } else {
        $iesQuery('.form-details').removeClass('active');
    }
    $iesQuery(this).addClass('active');

    $iesQuery.ajax({
        url: baseUrl + "admin/forms/getSortedDropdown/" + type + '/' + order + '/' + formId,
        success: function (result) {
            $("#" + type + '-dropdown-data').html(result);
        }
    });
});

/* Used to render new issue type listing while selecting form radio button */

$iesQuery(document).on('change', '.set-form-values', function () {
    var type = $iesQuery('.issue-type-details').attr('type');
    var order = $iesQuery('.issue-type-details').attr('order');
    var formId = $iesQuery(this).val();

    formId = (typeof (formId) === 'undefined') ? "" : formId;
    $iesQuery.ajax({
        url: baseUrl + "admin/forms/getSortedDropdown/" + type + '/' + order + '/' + formId,
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


/* Used to delete the selected issue type */

$iesQuery('.select-edit-issue').on('change', function () {
    var radioText = $(this).children(':selected').text();
    var radioValue = $(this).val();
    var deleteHref = baseUrl + "admin/forms/deleteIssue/" + radioValue;
    if (radioText !== 'Select') {
        $iesQuery('.issue-name').val(radioText);
        $iesQuery('#issue-type-id').val(radioValue);
        $iesQuery('#sumit-issue-type-form').val('Update');
        $iesQuery('.delete-issue-type').attr('href', deleteHref);
    } else {
        $iesQuery('.issue-name').val("");
        $iesQuery('#issue-type-id').val("");
        $iesQuery('#sumit-issue-type-form').val('Add');
        $iesQuery('.delete-issue-type').attr('href', 'javascript:void(0)');
    }
});

/* Used to render new form */

$iesQuery(document).on('change', '.renderd-forms', function () {
    var newHref = baseUrl + "admin/forms/add/" + $(this).val();
    $iesQuery('.load-previous-record').attr('href', newHref);
});

/* Used to implement form builder */

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


    /* Used to validate and save issue type data */

    $iesQuery("#issue-form-data").validate({
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
            var issueTypeName = $iesQuery('#issue-type-name').val();
            var issueTypeId = $iesQuery('#issue-type-id').val();
            $iesQuery.ajax({
                url: baseUrl + "IssueTypes/checkDuplicateIssueType/" + issueTypeName + '/' + issueTypeId,
                success: function (result) {
                    var resultResponse = jQuery.parseJSON(result);
                    if (resultResponse.result === true) {
                        $('#issue-type-name-duplicate').text(resultResponse.message);
                        $('#issue-type-name-duplicate').show();
                        $("#issue-form-data").off('submit');
                    } else {
                        $("#issue-form-data").submit();
                    }
                }
            });
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
            
            if(false === result) {
                $('#form_structure_error').show();
                $('#form_structure_error').text(errorMsg);
                return result;
            }
            
            //Ajax for checking duplicate form name 
            $iesQuery.ajax({
                url: baseUrl + "admin/forms/checkDuplicateFormName/" + formName + '/' + formId,
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
                url: baseUrl + "admin/forms/checkDuplicateFormName/" + formName + '/' + formId,
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
