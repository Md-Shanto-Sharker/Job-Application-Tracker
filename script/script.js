let interviewList = [];
let rejectedList = [];
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCards = document.getElementById("allCards");
const mainContainer = document.querySelector("main");

function allCardsCount() {
  total.innerText = allCards.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}
allCardsCount();

function toggleStyle(id) {
  allBtn.classList.remove("bg-blue-500", "text-white");
  allBtn.classList.add("bg-white", "text-gray-500");

  interviewBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.add("bg-white", "text-gray-500");

  rejectedBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.add("bg-white", "text-gray-500");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-white", "text-gray-500");
  selected.classList.add("bg-blue-500", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  const companyName = parentNode.querySelector(".companyName").innerText;
  const position = parentNode.querySelector(".position").innerText;
  const locationTypeSalary = parentNode.querySelector(
    ".location-type-salary",
  ).innerText;
  const description = parentNode.querySelector(".description").innerText;

  //   console.log(companyName, position, locationTypeSalary, description);
  const cardInfo = {
    companyName,
    position,
    locationTypeSalary,
    description,
  };
  console.log(cardInfo);
});
