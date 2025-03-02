document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");
    const themeToggle = document.getElementById("themeToggle");

    // Cambia el tema al hacer clic en el botón de cambio de tema
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "🌞";
    }

    // Cambia el tema al hacer clic en el botón de cambio de tema
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌞";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });

    // carga comentarios guardados
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];

    // agrega los comentarios guardados
    function renderComments() {
        commentList.innerHTML = ""; // Limpiar la lista de comentarios  
        savedComments.forEach((comment) => {
            addCommentToDOM(comment.text, comment.timestamp);
        });
        
    }

    // agrega un comentario al DOM
    function addCommentToDOM(text, timestamp) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        commentElement.innerHTML = `
            <p>${text}</p>
            <span>${timestamp}</span>
            <button class="delete-button">🗑️</button>
        `;

        commentList.appendChild(commentElement);

        // elimina el comentario del DOM y del almacenamiento local
        commentElement.querySelector(".delete-button").addEventListener("click", () => {
            const index = savedComments.findIndex(c => c.text === text && c.timestamp === timestamp);
            if (index !== -1) {
                savedComments.splice(index, 1); // elimina array
                localStorage.setItem("comments", JSON.stringify(savedComments));
            }
            commentElement.remove();
        });
    }

    // carga los comentarios guardados
    renderComments();

    // agrega el comentario
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const commentText = commentInput.value.trim();
        if (commentText === "") return;
        
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const now = new Date();
        const timestamp = now.toLocaleString();

        // agregar comentario al array y actualizar el almacenamiento local
        savedComments.push({ text: commentText, timestamp });
        localStorage.setItem("comments", JSON.stringify(savedComments));

        // mostrar el nuevo comentario en la pagina
        addCommentToDOM(commentText, timestamp);

        commentInput.value = ""; // limpia el campo despues de enviar
    });
});