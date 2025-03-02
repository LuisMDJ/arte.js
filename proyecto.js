//Users
const users = [
    {name: "Luis Monroy", username: "lmj", password: "1234", image: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/02/0238/02388242-6d6a-4e9e-a992-e1311eab3609/272eeb2c-3074-48a2-9653-a3c9b67b3209_832.jpg"},
    {name: "Jheronimus van Aken", username: "Bosco", password: "abcd", image: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/02/0238/02388242-6d6a-4e9e-a992-e1311eab3609/272eeb2c-3074-48a2-9653-a3c9b67b3209_832.jpg"}
]

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "homeproy.html";
    }else{
        error.textContent = "Usuario o contraseña incorrecta"
    }
}