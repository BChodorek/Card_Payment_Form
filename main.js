const form = document.querySelector(".form");
const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".cardName");
const cardCvv = document.querySelector(".cardCvv");
const cardMonth = document.querySelector(".month");
const cardYear = document.querySelector(".year");
const numberMask = "################";

const mapCardNumber = str => {
  const html = str.split("").map((char, index) => {
    if (index > 0 && index % 4 === 0) {
      return `<span> </span><div class='numberItem'>${char}</div>`;
    } else {
      return `<div class='numberItem'>${char}</div>`;
    }
  });
  cardNumber.innerHTML = html.join("");
};

const displayInput = e => {
  const value = form[e.target.name].value.trim();
  if (e.target.name === "number" && value !== null) {
    if (value === "") {
      mapCardNumber(numberMask);
    } else {
      mapCardNumber(value);
    }
  } else if (e.target.name === "name") {
    cardName.textContent = value;
  } else if (e.target.name === "cvv") {
    cardCvv.textContent = value;
  } else if (e.target.name == "date--month") {
    cardMonth.textContent = cardMonth.textContent.replace(/[^]*/, value);
  } else if (e.target.name === "date--year") {
    cardYear.textContent = cardYear.textContent.replace(
      /[^]*/,
      value.slice(2, 4)
    );
  }
};

mapCardNumber(numberMask);
form.addEventListener("keyup", e => displayInput(e));
form.addEventListener("change", e => displayInput(e));
