// 1. Add button event handler
document.getElementById('submit-comment').
    addEventListener('click', function () {

        // 2. Get user comment
        const commentText = document.getElementById
            ('textBox');
        const userComment = commentText.value;

        // 3. create comment paragraph 
        const newComment = document.createElement('p');
        newComment.innerText = commentText.value;

        // 4.append the comment
        const commentContainer = document.getElementById('comment-container');
        commentContainer.appendChild(newComment);

        // 5. clear the comment box values
        commentText.value = '';
    })