// JScript source code

function valid() {
	var status=true;
    if (document.getElementById('txt_fname').value == "") {
        document.getElementById('sp_fname').innerHTML = "Enter First Name";
        status =  false;
		return false;
    }
    if (document.getElementById('txt_lname').value == "") {
        document.getElementById('sp_lname').innerHTML = "Enter Last Name";
        status =  false;
		return false;
    }
    if (document.getElementById('txt_email').value == "") {
        document.getElementById('sp_email').innerHTML = "Enter Email";
        status =  false;
		return false;
    }
    if (document.getElementById('txt_pass').value == "") {
        document.getElementById('sp_pass').innerHTML = "Enter Password";
        status =  false;
		return false;
    }
	
	 if (document.getElementById('txt_address').value == "") {
        document.getElementById('sp_add').innerHTML = "Enter Address";
        status =  false;
		return false;
    }
	
    if (document.frm_reg.rbt_gender[0].checked == false && document.frm_reg.rbt_gender[1].checked == false) {

        document.getElementById('sp_male').style.color = "red";
        document.getElementById('sp_female').style.color = "red";
        status =  false;
		return false;
    }
    if (document.getElementById('ddl_city').selectedIndex == 0) {
        document.getElementById('ddl_city').style.color = "red";
        status =  false;
		return false;
    }
    if (document.frm_reg.chk_play.checked == false && document.frm_reg.chk_read.checked == false && document.frm_reg.chk_sing.checked == false && document.frm_reg.chk_dance.checked == false) {
        
        document.getElementById('sp_play').style.color = "red";
        document.getElementById('sp_read').style.color = "red";
        document.getElementById('sp_sing').style.color = "red";
        document.getElementById('sp_dance').style.color = "red";
        status =  false;
		return false;
    }
	if(status==true)
	{
		alert("Form Submitted Sccessfully...");
	}
	
}

function txt_clear(id) {
    document.getElementById(id).innerHTML = "";
}

function ddl() {
    document.getElementById('ddl_city').style.color = "black";
}

function rbt() {
    document.getElementById('sp_male').style.color = "black";
    document.getElementById('sp_female').style.color = "black";
}

function chk() {
    document.getElementById('sp_play').style.color = "black";
    document.getElementById('sp_read').style.color = "black";
    document.getElementById('sp_sing').style.color = "black";
    document.getElementById('sp_dance').style.color = "black";
}

function clear_all() {
    document.getElementById('sp_fname').innerHTML = "";
	document.getElementById('txt_fname').focus();
    document.getElementById('sp_lname').innerHTML = "";
    document.getElementById('sp_email').innerHTML = "";
    document.getElementById('sp_pass').innerHTML = "";
 	document.getElementById('sp_add').innerHTML = "";
 
    document.getElementById('ddl_city').style.color = "black";

    document.getElementById('sp_male').style.color = "black";
    document.getElementById('sp_female').style.color = "black";

    document.getElementById('sp_play').style.color = "black";
    document.getElementById('sp_read').style.color = "black";
    document.getElementById('sp_sing').style.color = "black";
    document.getElementById('sp_dance').style.color = "black";
}

function check_element(name,type)
{
	var check = document.getElementById(name).checked;
	
	if(type=="chk")
	{
		if(check==true)
		 {
			document.getElementById(name).checked=false;
	 	 }
		else
		 {
			 chk();
			document.getElementById(name).checked=true;
		 }
	}
	else
	{
		rbt();
		document.getElementById(name).checked=true;
	}
	
	
}

