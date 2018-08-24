function check_form(form){
	if(form.company.value==''){
		alert('Name');
		form.company.focus();
		return false;
	}else if(form.fio.value==''){
		alert('Company');
		form.fio.focus();
		return false;
	}else if(form.email.value==''){
		alert('Email');
		form.email.focus();
		return false;
	}else if(form.phone.value==''){
		alert('Phone');
		form.time.phone();
		return false;
	}else if(form.time.value==''){
		alert('Time');
		form.time.focus();
		return false;
	}else{
		document.forms.order.submit();
		return true;
	}
}