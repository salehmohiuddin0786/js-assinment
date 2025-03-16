let colorInput = document.getElementById("colorPicker");

colorInput.addEventListener("input", function() {
    
    document.body.style.backgroundColor = colorInput.value;
});
