function Verify() {
    let userRef = "Anjaneyulu@gmail.com";
    let passRef = "12RobotoAnji";

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === userRef && pass === passRef) {
        window.location.href = "https://clicklogin.ccbp.tech"
    } else {
        alert("Invalid credentials Please try it again...")
    }
};