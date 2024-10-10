// load all data
const loadDataAll = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => DisplayCardShow(data.pets))
    .catch((error) => console.error(error, "try Again"));
};
// display card 17 show
const DisplayCardShow = (data) => {
  // console.log(data);
  const card = document.getElementById("cards");
  card.innerHTML = "";
  if (data.length == 0) {
    card.classList.remove("md:grid", "lg:grid");
    card.innerHTML = `<div class="text-center bg-gray-100 p-10 rounded-xl">
    <div class="flex justify-center"><img class="w-auto" src="./images/error.webp" alt=""></div>
    <p class=" text-2xl font-bold">No Information Available</p>
    <p>Our store is almost out of stock. After few days again good quality birds will be stocked which will be of very good quality. Thank you again.</p>
    </div>`;
    return;
  } else {
    card.classList.add("md:grid", "lg:grid");
  }
  // const gelary = document.getElementById("cardImg");
  data.forEach((item) => {
    // console.log(item);
    const dispalyCrad = document.createElement("div");
    dispalyCrad.classList.add();
    dispalyCrad.innerHTML = ` <div
            class="p-1"
          >
            <div class="card bg-base-100 shadow-xl">
              <div class="px-5 pt-5 h-[200px]">
                <img 
                  src="${item.image}"
                  alt="Shoes"
                  class="rounded-xl h-full"
                />
              </div>
              <div class="card-body">
                <h3 class="text-xl font-bold">${item.pet_name}</h3>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=24&id=qpoaAWKnMCRM&format=png"
                    alt=""
                  />
                  Breed : ${item.breed ? item.breed : "Not Found"}
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=24&id=670IzZ7LCk7e&format=png"
                    alt=""
                  />Date-of-birth : ${
                    item.date_of_birth ? item.date_of_birth : "Not Found"
                  }
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=26&id=6564&format=png"
                    alt=""
                  />Gender : ${item.gender ? item.gender : "Not Found"}
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=24&id=Mo7RFMMtw3nS&format=png"
                    alt=""
                  />
                  Price : ${item.price ? item.price : "No stok"} $
                </p>
                <div class="border-2"></div>
                <div class="flex justify-between gap-1 ml-[-25px]">
                <button  onclick="likeBtn('${item.image}')" class="btn">
                    <img
                      src="https://img.icons8.com/?size=24&id=82788&format=png"
                      alt=""
                    />
                  </button>
                  <button id="adopts-${
                    item.petId
                  }" class="btn text-green-800" onclick="adoptModal('${
      item.petId
    }')">Adopt</button>
                  <button onclick="modalSo('${
                    item.petId
                  }')" class="btn text-green-800">Details</button>
                </div>
              </div>
            </div>
          </div> `;

    card.append(dispalyCrad);
  });
};
// 4th btn API Load
const loadbtn4 = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => btn4DidplayShow(data.categories))
    .catch((error) => console.error(error, "try Again"));
};
// 4btn Display show
const btn4DidplayShow = (data) => {
  const button4th = document.getElementById("button4");
  // console.log(data);
  data.forEach((btn) => {
    // console.log(btn);
    const button4 = document.createElement("div");
    button4.innerHTML = `<button id="colorbtn-${btn.id}" class="btn px-20 py-4 h-auto w-auto text-center btn4q" onclick="colorAdd('${btn.id}')" >
    <div class="w-10 "><img src="${btn.category_icon}"/></div>
    <p>${btn.category}</p></button>`;
    //
    button4.setAttribute("onclick", `btnSort('${btn.category}')`);
    button4th.append(button4);
  });
};
// btn color change
const colorAdd = (id) => {
  const colorAdd = document.getElementById(`colorbtn-${id}`);
  const buttons = document.querySelectorAll(".btn4q");
  buttons.forEach((button) => {
    button.classList.remove(
      "btn-success",
      "text-white",
      "text-lg",
      "rounded-full"
    );
  });
  colorAdd.classList.add(
    "btn-success",
    "text-white",
    "text-lg",
    "rounded-full"
  );
  const cards = document.getElementById("allCards");
  const lodings = document.getElementById("lodings");
  lodings.classList.remove("hidden");
  cards.classList.add("hidden");
  document.getElementById("btn4OpenModal").click();
  setInterval(() => {
    lodings.classList.add("hidden");
    cards.classList.remove("hidden");
    const cls = document.getElementById("cancel1").click();
  }, 2000);
};
// ai fach ar bisoi ta valo kore bujhe nite hobe 121 er function ta...
// 4btn sort img card
const btnSort = (id) => {
  // console.log(id);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => DisplayCardShow(data.data))
    .catch((error) => console.error(error, "try Again"));
};
// display cards like btn
const likeBtn = (items) => {
  // console.log(items);
  const gelary = document.getElementById("cardGelary");
  const div = document.createElement("div");
  // div.classList("grid");
  div.innerHTML = `<div class=" card p-2">
  <img src=${items}
      alt=""
      class="rounded-xl"/>
        </div>`;
  gelary.append(div);
};
// Showmodal API fetch ditals
const modalSo = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => sModal(data.petData))
    .catch((error) => console.log(error, "error try again"));
};

// Show modal open ditals
const sModal = (item) => {
  // console.log(item);
  const modalText = document.getElementById("modal");
  modalText.innerHTML = "";
  modalText.classList.remove("hidden");
  modalText.innerHTML = `
    <button id="m" class="btn hidden" onclick="my_modal_5.showModal()">open modal</button>
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle w-[90%] mx-auto ">
    <div class="modal-box">
     <div class="card bg-base-100 shadow-xl">
              <figure class="px-5 pt-5">
                <img
                  src='${item.image}'
                  alt="imgs"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body">
                <h3 class="text-xl font-bold">${
                  item.breed ? item.breed : "Data not found"
                }</h3>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=24&id=qpoaAWKnMCRM&format=png"
                    alt=""
                  />
                  Breed : ${item.breed ? item.breed : "Data not found"}
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=24&id=670IzZ7LCk7e&format=png"
                    alt=""
                  />Date-of-birth : ${
                    item.date_of_birth ? item.date_of_birth : "Data not found"
                  }
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=26&id=6564&format=png"
                    alt=""
                  />Gendar : ${item.gender ? item.gender : "Data not found"}
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=24&id=Mo7RFMMtw3nS&format=png"
                    alt=""
                  />
                  Price : ${item.price ? item.price : "Data not found"}
                </p>
                <p class="flex">
                  <img
                    class="pr-2"
                    src="https://img.icons8.com/?size=26&id=5348&format=png"
                    alt=""
                  />
                  Price : ${
                    item.vaccinated_status
                      ? item.vaccinated_status
                      : "Data not found"
                  }
                </p>
    <div class="border-2"></div>
    <p class=" text-lg font-semibold">Details Information</p>
    <p>${item.pet_details}</p>
    <div class="modal-action">
       <form method="dialog" class=" w-10/12 mx-auto">
       <!-- if there is a button in form, it will close the modal -->
           <button class="btn w-full">Cancel</button>
      </form>
    </div>

    </div>
    </div>
     
    </div>
  </dialog>
    `;
  setTimeout(() => {
    const daisyModal = document.getElementById("m");
    daisyModal.click();
  }, 400);
};
// view more scroll by sort by price
const view = () => {
  window.scrollBy({
    top: 800,

    behavior: "smooth",
  });
};
// Adopt modal open
let countdown = 3;
const adoptModal = (id) => {
  const openM = document.getElementById("modalbtn2so");
  const btnAdopt = document.getElementById(`adopts-${id}`);
  btnAdopt.setAttribute("disabled", true);
  // console.log(btnAdopt);
  openM.click();

  const countdownDisplay = document.getElementById("countdownDisplay");
  const intervalId = setInterval(() => {
    countdownDisplay.textContent = countdown;
    countdown--;
    if (countdown < 0) {
      document.getElementById("closes").click();
      clearInterval(intervalId);
      countdownDisplay.textContent = 0;
      countdown = 3;
    }
  }, 1000);
};
// sort by price start-----------
// fecth data
const sortByPrice = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => priceSort(data.pets))
    .catch((error) => console.log("pls try agin", error));
};
// sort num
const priceSort = (datas) => {
  datas.sort((a, b) => a.value - b.value);
  datas.sort((a, b) => {
    const nameA = a.price;
    const nameB = b.price;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  DisplayCardShow(datas);
};
// sort by price end----------

loadbtn4();
loadDataAll();
