"use strict";

// Target Elements
const ratingFormEl = document.getElementById("ratingForm");
const feedbackCardEl = document.querySelector(".feedback--card");
const rateGivenEl = document.getElementById("rateGiven");
const inputRateContainer = document.querySelector(".input--rates__container");
const submitButton = document.querySelector(".btn--submit");
const errorMessage = "Please help us to improve by giving a rate... 🙏";

const ratingApp = {
  currSelectedRateBtn: null,

  _displayFeedback() {
    ratingFormEl.classList.toggle("hidden");
    feedbackCardEl.classList.toggle("hidden");
  },

  _assignRate() {
    const rateValue = this.currSelectedRateBtn.value;
    rateGivenEl.textContent = rateValue;
  },

  _submitFormProcess(e) {
    e.preventDefault();

    if (!this.currSelectedRateBtn) {
      alert(errorMessage);
      return;
    }

    this._assignRate();

    this._displayFeedback();
  },

  init() {
    // Apply Event Delegation
    inputRateContainer.addEventListener(
      "click",
      function (e) {
        if (!e.target.classList.contains("input--rate")) return;
        this.currSelectedRateBtn = e.target;
      }.bind(this)
    );

    ratingFormEl.addEventListener("submit", this._submitFormProcess.bind(this));
  },
};

ratingApp.init();
