/*
Name, Date of Birth (use select drop down list),
 Gender, Address, Ps. No. , batch No.
 and Date of Joining (use select drop down list)
*/
function formV() {
    var form = document.forms.frm;
    var name = form.name.value;
    var dob = form.dob.value;
    var rM = document.getElementById("m").checked ;
    var rF = document.getElementById("f").checked;
    var add = document.getElementById("addr");
    var bNo = document.getElementById("bNo");
    var doj = document.getElementById("doj").value;
    
    console.log(dob);
    if(name == '' && dob =='' && (rM == false || rm == false) && add.value == '' && bNo.value == null && doj.value == ''){
        alert("something is wrong");
        return false;
        
    }
    else {
        return true ;
    }

    
    
}


