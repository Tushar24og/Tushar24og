let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // Select all buttons
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Caution: eval can be dangerous
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Display error for invalid expressions
                string = ""; // Reset string after error
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});