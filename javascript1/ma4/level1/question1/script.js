// Create an event that triggers off a button click. Use a JavaScript Alert to display success.
(() => {
    const alertButton = document.getElementById("alertButton");
    alertButton.addEventListener("click", () => alert("Button was clicked."));
})();

