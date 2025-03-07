// Function to show custom alert and set focus
function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    
    alertMessage.innerText = message;
    alertBox.style.display = 'block';  // Show the alert box
    alertBox.focus();  // Set focus to the alert box
}

// Function to hide the alert
document.getElementById('closeAlert').addEventListener('click', () => {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';  // Hide the alert box
});

// Mouse Events
document.getElementById('clickMe').addEventListener('click', () => {
    document.getElementById('mouseStatus').innerText = 'Button Clicked!';
    showAlert('Mouse Event: Button Clicked!');
});

document.getElementById('dblClickMe').addEventListener('dblclick', () => {
    document.getElementById('mouseStatus').innerText = 'Button Double Clicked!';
    showAlert('Mouse Event: Button Double Clicked!');
});

document.getElementById('hoverMe').addEventListener('mouseover', () => {
    document.getElementById('mouseStatus').innerText = 'Hovered Over Button!';
    showAlert('Mouse Event: Hovered Over Button!');
});

// Keyboard Events
document.getElementById('keyInput').addEventListener('keyup', (e) => {
    document.getElementById('message').innerText = `You typed: ${e.target.value}`;
});

// Form Events
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page
    const textInput = document.getElementById('formInput').value;
    const selectedOption = document.getElementById('formSelect').value;
    document.getElementById('formStatus').innerText = `Form submitted with: ${textInput}, ${selectedOption}`;
    showAlert(`Form Event: Form submitted with text "${textInput}" and option "${selectedOption}"`);
});

// Window Events
window.addEventListener('resize', () => {
    document.getElementById('windowStatus').innerText = `Window resized to ${window.innerWidth} x ${window.innerHeight}`;
    showAlert(`Window Event: Window resized to ${window.innerWidth} x ${window.innerHeight}`);
});

window.addEventListener('scroll', () => {
    document.getElementById('windowStatus').innerText = 'You are scrolling!';
    showAlert('Window Event: You are scrolling!');
});
