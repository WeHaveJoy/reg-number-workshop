const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");

const regNumbersEntered = [];

addRegNumberBtn.addEventListener("click", function() {

	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}
	const currentRegNumber = regNumberEntered.value.toUpperCase();

if( currentRegNumber.startsWith("CA") ||
currentRegNumber.startsWith("CJ") ||
currentRegNumber.startsWith("CY")){

message.innerHTML = "";

	
	if(!regNumbersEntered.includes(currentRegNumber)){
		
	

const regNumberElem = document.createElement("div");
regNumberElem.classList.add("regNumber");
regNumberElem.innerHTML = currentRegNumber;
regNumbers.appendChild(regNumberElem);

	//regNumber.innerHTML = regNumberEntered.value;

	regNumbersEntered.push(currentRegNumber);
	}else{
		message.innerHTML = "This registration number already exists.";
	}

}else{
	message.innerHTML = "Invalid registration number entered.";
}
});


