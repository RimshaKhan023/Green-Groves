function submitform(){
    var fname = document.getElementById("fname").value;
    var fnameerror = document.getElementById("fnameerror");
    fnameerror.innerHTML = "";
    var lname = document.getElementById("lname").value;
    var lnameerror = document.getElementById("lnameerror");
    lnameerror.innerHTML = "";
    var email = document.getElementById("email").value;
    var emailerror = document.getElementById("emailerror");
    emailerror.innerHTML = "";
    var message = document.getElementById("message").value;
    var messageerror = document.getElementById("messageerror");
    messageerror.innerHTML = "";
    if(fname === ""){
        fnameerror.innerHTML = " First Name is Required!";
        return false;
    }
    if(lname === ""){
        lnameerror.innerHTML = " Last Name is Required!";
        return false;
    }
    if(email === ""){
        emailerror.innerHTML = " Enter Your Email!";
        return false;
    }
if(message === ""){
    messageerror.innerHTML = " Type Your Message!";
    return false;
    }
        function abc() {
            alert("Sent Successfully 🙂");
        }
        abc();
    return true;
}
