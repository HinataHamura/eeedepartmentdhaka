document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const comment = document.getElementById('comment').value;

  if (username && comment) {
    const commentSection = document.getElementById('commentsList');

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    
    newComment.innerHTML = `
      <strong>${username}</strong>
      <p>${comment}</p>
    `;

    // Add the new comment to the list
    commentSection.appendChild(newComment);

    // Clear the form after submission
    document.getElementById('commentForm').reset();
  }
});


