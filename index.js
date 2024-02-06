"use strict";

// Target Elements
const ratingFormEl = document.getElementById("ratingForm");
const feedbackCardEl = document.querySelector(".feedback--card");
const rateGivenEl = document.getElementById("rateGiven");
const inputRateContainer = document.querySelector(".input--rates__container");
const submitButton = document.querySelector(".btn--submit");

const ratingApp = {
  currSelectedRateBtn: null,

  prevSelectedRateBtn: null,

  _updateCurrPrevRateBtn(element) {
    this.prevSelectedRateBtn = this.currSelectedRateBtn;
    this.currSelectedRateBtn = element;
  },

  _markCurrSelectedRateBtn() {
    this.currSelectedRateBtn.classList.add("selected");
  },

  _unmarkPrevSelectedRateBtn() {
    if (!this.prevSelectedRateBtn) return;

    this.prevSelectedRateBtn.classList.remove("selected");
  },

  _rateSelectionLogic(e) {
    if (!e.target.closest(".input--rate")) return;

    e.preventDefault();

    const entry = e.target.closest(".input--rate");

    if (entry.classList.contains("selected")) return;

    this._updateCurrPrevRateBtn(entry);
    this._markCurrSelectedRateBtn();
    this._unmarkPrevSelectedRateBtn();

    submitButton.focus();
  },

  _displayFeedback() {
    ratingFormEl.classList.toggle("hidden");
    feedbackCardEl.classList.toggle("hidden");
  },

  _assignRate() {
    const rateValue = this.currSelectedRateBtn.querySelector(
      "input[type='radio']"
    ).value;
    rateGivenEl.textContent = rateValue;
  },

  _submitFormProcess(e) {
    e.preventDefault();

    if (!this.currSelectedRateBtn) {
      alert("Your Feedback will help us to improve...");
      return;
    }

    this._assignRate();

    this._displayFeedback();
  },

  _submitFormByKeyboard(e) {
    if (e.key !== "Enter") return;

    this._submitFormProcess(e);
  },

  init() {
    // Apply Event Delegation
    inputRateContainer.addEventListener(
      "click",
      this._rateSelectionLogic.bind(this)
    );

    ratingFormEl.addEventListener("submit", this._submitFormProcess.bind(this));
  },
};

ratingApp.init();
