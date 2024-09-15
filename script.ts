// Get display element
const display = document.getElementById("display") as HTMLInputElement;


// Function to append values to  display
function appendToDisplay(value: string): void {
    // Check if the current display value length is less than 9
    if (display.value.length < 9) {
        display.value += value;
    } else {
        alert("Maximum of 9 digits allowed");
    }
}

// Function to calculate the result
function calculate(): void {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay(): void {
    display.value = "";
}
