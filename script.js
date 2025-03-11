document.addEventListener('DOMContentLoaded', function() {    
    setupDoubleClickLike();
    setupLikeButtons();
});

function setupLikeButtons() {
    const likeButtons = document.querySelectorAll('.post-actions .fa-heart');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('fa-regular')) {
                this.classList.remove('fa-regular');
                this.classList.add('fa-solid');
                this.style.color = '#ed4956'; 
                
                const likesElement = this.closest('.post').querySelector('.likes');
                const likesText = likesElement.textContent;
                const currentLikes = parseInt(likesText.split(' ')[0]); 
                likesElement.textContent = (currentLikes + 1) + ' likes';
            } else {
                this.classList.remove('fa-solid');
                this.classList.add('fa-regular');
                this.style.color = ''; 
                
                const likesElement = this.closest('.post').querySelector('.likes');
                const likesText = likesElement.textContent;
                const currentLikes = parseInt(likesText.split(' ')[0]); 
                likesElement.textContent = (currentLikes - 1) + ' likes';
            }
        });
    });
}

function setupDoubleClickLike() {
    const postImages = document.querySelectorAll('.post-image img');
    
    postImages.forEach(image => {
        image.addEventListener('dblclick', function() {
            const post = this.closest('.post');
            const likeButton = post.querySelector('.post-actions .fa-heart');
            const likesElement = post.querySelector('.likes');
            
            if (likeButton.classList.contains('fa-regular')) {
                likeButton.classList.remove('fa-regular');
                likeButton.classList.add('fa-solid');
                likeButton.style.color = '#ed4956';
                
                const currentLikes = parseInt(likesElement.textContent);
                likesElement.textContent = (currentLikes + 1) + ' likes';
                
                showLikeAnimation(this);
            }
        });
    });
}

const jsonBlob = 'http://jsonblob.com/1349162247762665472';

fetch('http://jsonblob.com/1349162247762665472')
  .then(res => res.json())
  .then(data => console.log(data));