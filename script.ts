const display = document.getElementById("display") as HTMLInputElement;


function appendToDisplay(input: string): void {
    display.value += input;
};

function clearDisplay(): void {
    display.value = "";
};


function calculate(): void {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    };
};

