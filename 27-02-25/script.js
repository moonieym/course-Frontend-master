document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const commentText = commentInput.value.trim();
        if (commentText === "") return;
        
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const now = new Date();
        const timestamp = now.toLocaleString();

        commentElement.innerHTML = `
            <p>${commentText}</p>
            <span>${timestamp}</span>
            <button class="delete-button">🗑️</button>
        `;

        commentList.appendChild(commentElement);

        commentInput.value = ""; // Limpia el campo despues de enviar

        // Elimina el comentario al hacer clic en el botón de eliminar
        commentElement.querySelector(".delete-button").addEventListener("click", () => {
            commentElement.remove();
        });
    });
});