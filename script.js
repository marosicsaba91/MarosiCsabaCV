// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and output elements
    const button = document.getElementById('clickButton');
    const output = document.getElementById('output');
    
    let clickCount = 0;

    // Add click event listener to the button
    button.addEventListener('click', function() {
        clickCount++;
        output.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
        
        // Add a fun animation effect
        output.style.transform = 'scale(1.1)';
        setTimeout(() => {
            output.style.transform = 'scale(1)';
        }, 200);
    });

    // Log a welcome message to the console
    console.log('Welcome to My Web Project! The page has loaded successfully.');
});
