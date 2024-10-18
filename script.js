    const button = document.getElementById('myButton');
    
    document.addEventListener('mousemove', (event) => {
        const buttonRect = button.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    
        const distanceX = mouseX - buttonCenterX;
        const distanceY = mouseY - buttonCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
        const safeDistance = 75;
    
        if (distance < safeDistance) {
            moveButtonRandomly();
        }
    });
    
    button.addEventListener('mousedown', moveButtonRandomly);
    
    function moveButtonRandomly() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        const margin = 50; // Adjusts how close to the edge the button can go
        const newX = Math.random() * (windowWidth - button.offsetWidth - margin * 2) + margin;
        const newY = Math.random() * (windowHeight - button.offsetHeight - margin * 2) + margin;
    
        button.style.transform = `translate(${newX}px, ${newY}px)`;
    }
   // script.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the button and h2 element
    const fixedButton = document.getElementById('fixedButton');
    const h2Element = document.getElementById('message'); // Use the new id

    // Add a click event listener to the button
    fixedButton.addEventListener('click', function() {
        // Change the h2 text to "You welcome"
        h2Element.textContent = 'You are gey🤮🤮';
        h2Element.style.fontSize = '50px'; // Increase the font size
    });
});
