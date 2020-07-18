const otherJobField = document.querySelector("#other-title");
otherJobField.style.display = "none";
const jobSelect = document.querySelector("#title");
const colorMenu = document.getElementById("color");
const colorMenuLabel = colorMenu.previousElementSibling;
const designSelectMenu = document.getElementById("design");
const checkboxParent = document.querySelector(".activities");
let element = document.createElement("h3");
checkboxParent.appendChild(element);
const registerButton = document.querySelector("button[type='submit']");

//payment option element variable declarations
const paymentOpt = document.querySelector("#payment");
const creditCardInfo = document.querySelector("#credit-card");
const paypalInfo = document.querySelector("#paypal");
paypalInfo.style.display = "none";
const bitcoinInfo = document.querySelector("#bitcoin");
bitcoinInfo.style.display = "none";

//validation elements variable declarations
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#mail");
const creditCardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const creditCardCvv = document.querySelector("#cvv");
const checkboxHeading = document.querySelector(".activities legend");
//Flags for input submission checks
 let nameFlag = false;
 let emailFlag = false;
 let checkboxFlag= false;
 let creditChosenFlag=false;
 let crediCardFlag = false;
 let cvvflag= false;


//functions for testing input
function nameInputTest() {
  let regex = /^[\w]+(\s+)?[\w+]+$/i;
  let regTest = regex.test(userName.value);
  let nameLabel = document.querySelector('label[for ="name"]');
  if (regTest) {
    userName.style.borderColor = "rgb(111, 157, 220)";
    nameLabel.innerHTML = "Name :";
    nameLabel.style.color = "black";
    nameFlag= true;
  } else {
    userName.style.borderColor = "tomato";
    nameLabel.style.color = "darkred";
    nameLabel.innerHTML = "<strong>Name : Please enter a valid Name</strong>";
    nameFlag= false;
  }
}
function emailInputTest() {
  //email regex taken from emailregex.com
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regTest = regex.test(userEmail.value);
  let emailLabel = document.querySelector('label[for ="mail"]');
  if (regTest) {
    userEmail.style.borderColor = "rgb(111, 157, 220)";
    emailLabel.innerHTML = "Email :";
    emailLabel.style.color = "black";
    emailFlag= true;
  } else {
    userEmail.style.borderColor = "tomato";
    emailLabel.style.color = "darkred";
    emailLabel.innerHTML =
      "<strong>Email : Please enter a valid Email address example: <em>someone@domain.com/net</em></strong>";
    emailFlag=false; 
  }
}
function checkboxChecked() {
  let checked = false;
  for (let i = 0; i < activityCheckboxes.length; i++) {
        const element = activityCheckboxes[i];
        if (element.checked) {
          checked = true;
          break;
        } else {
          checked = false;
        }
      }
  if (checked == true) {
    checkboxHeading.style.color= "rgba(6, 49, 68, 0.9)";
    checkboxHeading.innerHTML = "Register for Activities";
    console.log("we have at least one thing checked");
   checkboxFlag= true;
  } else {
    checkboxHeading.style.color = "darkred";
    checkboxHeading.innerHTML = "Register for Activities : <strong> Please select at least 1 activity</strong>"
    console.log("we have failed to check something");
    checkboxFlag= false;
  }
}
//credit card validation
//function to manipulate select menu option properties.
function optionManipulation(selectedOption, property, propValue) {
  let option = document.querySelector(`option[value="${selectedOption}"]`);
  option[property] = propValue;
}
// function to compile prices of checked items.
function buildCost() {
  let totalCost = 0;
  element.InnerHTML = "";
  for (let i = 0; i < activityCheckboxes.length; i++) {
    if (activityCheckboxes[i].checked) {
      totalCost =
        totalCost + parseInt(activityCheckboxes[i].getAttribute("data-cost"));
      element.innerHTML = ` Your Total Cost: $ ${totalCost}.00`;
    }
  }
}
// Show Other text input when "other" is selected from the drop down job menu

jobSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobField.style.display = "";
  } else {
    otherJobField.style.display = "none";
  }
});
// showing/ hiding the color menu and label until a design is selected.
colorMenu.style.display = "none";
colorMenuLabel.style.display = "none";
designSelectMenu.addEventListener("change", (e) => {
  if (e.target.value === "js puns" || e.target.value === "heart js") {
    colorMenu.style.display = "";
    colorMenuLabel.style.display = "";
  } else {
    colorMenu.style.display = "none";
    colorMenuLabel.style.display = "none";
  }
});

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
const activityCheckboxes = document.querySelectorAll(".activities input");
document.querySelector(".activities").addEventListener("change", (e) => {
  checkboxChecked();
  //reset element inner html to default.
  element.innerHTML = ` Your Total Cost: $ 0.00`;
  // call buildcost function to create cost and replace inner html
  buildCost();
  let clicked = e.target;
  let dayAndTime = e.target.getAttribute("data-day-and-time");
  // loop over checkboxes and if day and time matches disable the checkboxes that match
  for (let i = 0; i < activityCheckboxes.length; i++) {
    let dayAndTimeCheck = activityCheckboxes[i].getAttribute(
      "data-day-and-time"
    );
    if (dayAndTime === dayAndTimeCheck && clicked !== activityCheckboxes[i]) {
      if (clicked.checked) {
        activityCheckboxes[i].disabled = true;
      } else {
        activityCheckboxes[i].disabled = false;
      }
    }
  }
});
//payment section hiding the select option and making credit card the default.
optionManipulation("select method", "hidden", true);
optionManipulation("credit card", "selected", true);
paymentOpt.addEventListener("change", (e) => {
  if (e.target.value === "credit card") {
    paypalInfo.style.display = "none";
    bitcoinInfo.style.display = "none";
    creditCardInfo.style.display = "";
  } else if (e.target.value === "paypal") {
    paypalInfo.style.display = "";
    creditCardInfo.style.display = "none";
    bitcoinInfo.style.display = "none";
  } else {
    bitcoinInfo.style.display = "";
    paypalInfo.style.display = "none";
    creditCardInfo.style.display = "none";
  }
});
//name field validator. Regex checks for a name. It allows
//for a space(varying size)and an optional last name ending with a letter
userName.addEventListener("keyup", () => {
  nameInputTest();
});
//email validator taken from emailregex.com
userEmail.addEventListener("keyup", () => {
  emailInputTest();
});

registerButton.addEventListener("mouseover", () => {
  console.log(emailFlag,nameFlag,checkboxFlag);
  emailInputTest();
  nameInputTest();
  checkboxChecked();
  if(nameFlag==false || emailFlag==false || checkboxFlag==false){
    registerButton.disabled=true;
  }else{
    console.log("this shit is firing");
    registerButton.removeAttribute("disabled");
  }
});
