function displayInfo() {
    // Get the dropdown element and the selected option
    var dropdown = document.getElementById("flockerDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    // Parse the selected option value (which is a JSON string)
    if (selectedOption) {
        var flockerInfo = JSON.parse(selectedOption);

        // Display the information
        var infoDisplay = document.getElementById("infoDisplay");
        infoDisplay.innerHTML = `Age: ${flockerInfo.age}<br>Gender: ${flockerInfo.gender}<br>Height: ${flockerInfo.height}`;
    } else {
        // If no flocker is selected, reset the display
        document.getElementById("infoDisplay").innerHTML = "Information will be displayed here";
    }
}