function fun()
{
    var a= document.form.Email.value;
    var b= document.form.phone.value;
    if((a.indexOf('@')<=0) || ((a.charAt (a.length-4) !='.') && (a.charAt (a.length-3)!='.') ))
    {
        document.getElementById("email").innerHTML="**Invalid Email ID";
        return false;
    }   
}