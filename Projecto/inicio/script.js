document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    if (emailValid(email)) {
        localStorage.setItem("email", email)
        window.location.href = "/Projecto/hub/hub.html" 
       } else {
        alert("Por favor, introduce un correo valido")
    };
});
function emailValid(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
    get
}