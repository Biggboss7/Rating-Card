const listButtonRate = document.querySelectorAll(".rate-btn");
const submitButton = document.querySelector(".submit-btn");
const rateResult = document.querySelector(".rate-text");

let previousBtn = null;
let givenRate;

const eventAssignment = function(button) {
  button.addEventListener("click", selected);
}

const selected = function () {
  if (previousBtn === null) {
    previousBtn = Number(this.innerHTML) - 1;
  } else {
      listButtonRate[previousBtn].classList.remove("selected-button");
      previousBtn = Number(this.innerHTML) - 1;
    }
    this.classList.add("selected-button");
    givenRate = this.innerHTML;
};

const submission = function () {
  if (givenRate === undefined) {
    alert("Please give us any rate")
  } else {
      document.querySelector(".before-submit").style.display = "none";
      document.querySelector(".after-submit").style.display = "block";
      displayResult();
    }
};

const displayResult = function () {
  rateResult.innerHTML = `You selected ${givenRate} out of 5`
};

listButtonRate.forEach(eventAssignment);
submitButton.addEventListener("click", submission);
