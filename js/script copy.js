// Show Other text input when "other" is selected from the drop down job menu
let otherJobField = document.querySelector("#other-title");
otherJobField.style.display = "none";
let jobSelectorOption = document.querySelector("#title");
jobSelectorOption.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobField.style.display = "";
  } else {
    otherJobField.style.display = "none";
  }
});
// showing/ hiding the color menu and label until a design is selected.
let colorMenu = document.getElementById("color");
let colorMenuLabel = colorMenu.previousElementSibling;
let colorMenuChild = document.querySelectorAll("#color option");
colorMenu.style.display = "none";
colorMenuLabel.style.display = "none";

let designSelectMenu = document.getElementById("design");
designSelectMenu.addEventListener("change", (e) => {
  if (e.target.value === "js puns" || e.target.value === "heart js") {
    colorMenu.style.display = "";
    colorMenuLabel.style.display = "";
  } else {
    colorMenu.style.display = "none";
    colorMenuLabel.style.display = "none";
  }
});

//function to manipulate select menu option properties.
function optionManipulation(selectedOption, property, propValue) {
  let option = document.querySelector(`option[value="${selectedOption}"]`);
  option[property] = propValue;
}

designSelectMenu.addEventListener("change", (e) => {
  if (e.target.value === "js puns") {
    //Make sure relevant Options are shown
    optionManipulation("cornflowerblue", "hidden", false);
    optionManipulation("darkslategrey", "hidden", false);
    optionManipulation("gold", "hidden", false);
    //set default option selection
    optionManipulation("gold", "selected", true);
    //Hide irrelevant options
    optionManipulation("tomato", "hidden", true);
    optionManipulation("steelblue", "hidden", true);
    optionManipulation("dimgrey", "hidden", true);
  } else if (e.target.value === "heart js") {
    //Make sure relevant Options are shown
    optionManipulation("tomato", "hidden", false);
    optionManipulation("steelblue", "hidden", false);
    optionManipulation("dimgrey", "hidden", false);
    //set default option selection
    optionManipulation("dimgrey", "selected", true);
    //Hide irrelevant options
    optionManipulation("cornflowerblue", "hidden", true);
    optionManipulation("darkslategrey", "hidden", true);
    optionManipulation("gold", "hidden", true);
  }
});

const activityCheckboxes = document.querySelectorAll("#activities input");
document.querySelector("#activities").addEventListener("change", (e) => {});
