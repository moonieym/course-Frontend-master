function addComment() {
    const commentText = document.getElementById("commentInput").value;
    if (commentText.trim() === "") return;

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    const timestamp = new Date().toLocaleString();

    commentBox.innerHTML = `
        <p>${commentText}</p>
        <span class="timestamp">${timestamp}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">X</button>
    `;

    document.getElementById("commentsSection").appendChild(commentBox);
    document.getElementById("commentInput").value = "";
}
