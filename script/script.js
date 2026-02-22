let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allBtn = document.getElementById("all-btn");
// const noJobSection = document.getElementById("no-job");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCards = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

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
  currentStatus = id;
  selected.classList.remove("bg-white", "text-gray-500");
  selected.classList.add("bg-blue-500", "text-white");

  if (id == "interview-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "rejected-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-button")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const locationTypeSalary = parentNode.querySelector(
      ".location-type-salary",
    ).innerText;
    const stetus = parentNode.querySelector(".stetus").innerText;
    const description = parentNode.querySelector(".description").innerText;
    parentNode.querySelector(".stetus").innerText = "Interview";

    const cardInfo = {
      companyName,
      position,
      locationTypeSalary,
      stetus: "Interview",
      description,
    };

    const companyExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    allCardsCount();
    if (currentStatus == "interview-btn") {
      renderInterview();
    }
    if (currentStatus == "rejected-btn") {
      renderRejected();
    }
    // renderInterview();
  } else if (event.target.classList.contains("rejected-button")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const locationTypeSalary = parentNode.querySelector(
      ".location-type-salary",
    ).innerText;
    const stetus = parentNode.querySelector(".stetus").innerText;
    const description = parentNode.querySelector(".description").innerText;
    parentNode.querySelector(".stetus").innerText = "Rejected";

    const cardInfo = {
      companyName,
      position,
      locationTypeSalary,
      stetus: "Rejected",
      description,
    };

    const companyExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    allCardsCount();
    if (currentStatus == "rejected-btn") {
      renderRejected();
    }

    if (currentStatus == "interview-btn") {
      renderInterview();
    }
  }
});

function renderRejected() {
  filterSection.innerHTML = "";
  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.className = "p-8 shadow-xs bg-white rounded-md";
    div.innerHTML = `
    <div class="space-y-6 ">
            <div>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#002C5C] companyName text-2xl font-bold">
                    ${reject.companyName}
                  </p>
                  <p class="text-[#64748B] position">${reject.position}</p>
                </div>
                <div
                  class="border-2 border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <i class="fa-solid fa-trash-can text-[#64748B]"></i>
                </div>
              </div>

              <p class="text-[#64748B] my-6 location-type-salary">
               ${reject.locationTypeSalary}
              </p>
            </div>
            <div>
              <button  class="btn  bg-[#EEF4FF] text-[#002C5C] stetus">
                ${reject.stetus}
              </button>
              <p class="text-[#323B49] mt-3 description">
                ${reject.description}
              </p>
            </div>
            <div class="flex gap-5">
              <button class="btn btn-outline btn-success interview-button">INTERVIEW</button>
              <button class="btn btn-outline btn-error rejected-button">REJECTED</button>
            </div>
          </div>
    `;
    filterSection.appendChild(div);
  }
}
function renderInterview() {
  filterSection.innerHTML = "";
  for (let inter of interviewList) {
    let div = document.createElement("div");
    div.className = "p-8 shadow-xs bg-white rounded-md";
    div.innerHTML = `
    <div class="space-y-6 ">
            <div>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#002C5C] companyName text-2xl font-bold">
                    ${inter.companyName}
                  </p>
                  <p class="text-[#64748B] position">${inter.position}</p>
                </div>
                <div
                  class="border-2 border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <i class="fa-solid fa-trash-can text-[#64748B]"></i>
                </div>
              </div>

              <p class="text-[#64748B] my-6 location-type-salary">
               ${inter.locationTypeSalary}
              </p>
            </div>
            <div>
              <button  class="btn  bg-[#EEF4FF] text-[#002C5C] stetus">
                ${inter.stetus}
              </button>
              <p class="text-[#323B49] mt-3 description">
                ${inter.description}
              </p>
            </div>
            <div class="flex gap-5">
              <button class="btn btn-outline btn-success">INTERVIEW</button>
              <button class="btn btn-outline btn-error">REJECTED</button>
            </div>
          </div>
    `;
    filterSection.appendChild(div);
  }
}
