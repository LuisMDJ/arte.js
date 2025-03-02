document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
});

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString();

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const newComment = {
        id: new Date().getTime(), 
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('comment').value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    commentSection.innerHTML = ''; 

    comments.forEach((comment) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");

        comentarioSection.innerHTML = `
            <img src="${comment.image}" class="user-image">
            <strong>${comment.name}</strong>  
            <br><p>${comment.timestamp}</p><br> 
            ${comment.commentText}
            <button class="delete-button" onclick="eliminarComentario(${comment.id})">Eliminar</button>
        `;
        
        commentSection.appendChild(comentarioSection);
    });
}

function eliminarComentario(id) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(comment => comment.id !== id); 

    localStorage.setItem('comments', JSON.stringify(comments));

    mostrarComentarios();
}
