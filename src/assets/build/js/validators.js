$(document).ready(function(){
    if($("#create-users").length !== 0) {
	$("#create-users").validate({
		rules: {
			name: {
				required: true,
                validateName: true,
				minlength: 5
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			cpassword: {
				required: true,
				equalTo: password
			}
		}
	});
    }
	
	$("#login-user").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			}
		}
	});
    
    jQuery.validator.addMethod("validateName", function(value, element) {
  return this.optional( element ) || /^[a-zA-Z]+$/.test( value );
}, 'Please enter a valid name.');
});