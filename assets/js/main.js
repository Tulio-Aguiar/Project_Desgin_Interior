document.getElementById("copyright").innerHTML = "COPYRIGHT &copy; " + new Date().getFullYear();

let user = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");


function submitData() {

    let msg = user.value + " <" + email.value + ">, you have sucessfully signed up to H & H!\n";
    msg += "Your message:\n";
    msg += message.value;

    console.log(msg);

    user.value = "";
    email.value = "";
    message.value = "";
}