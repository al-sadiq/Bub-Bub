
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.floor(Math.random() * 80) + 30; 
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.top = Math.random() * window.innerHeight + 'px'; 
    bubble.style.animationDelay = Math.random() * 5 + 's'; 

    bubble.addEventListener('click', function() {
        const audio = new Audio('shooting-sound-fx-159024.mp3'); 
        audio.play();
        setTimeout(() => {
            bubble.remove();
        }, 100); 
    });

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.style.opacity = 1;
    }, 100);
}

setInterval(createBubble, 600);
document.querySelector('.start-button').addEventListener('click', function() {
    window.location.href = 'start.html'; 
});

function toggleAudio() {
    let dropdown = document.getElementById('audioDropdown');
    dropdown.classList.toggle('show');
    let audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause(); // Pause all audio elements
    });
}

