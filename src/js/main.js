function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.querySelector("#parkStates").innerHTML = "ID, WY, MT"
    document.querySelector("#heroImg").src = "/images/yellowstone.jpg"
}

updateParkInformation()

function addEventListeners() {
  const menuTrigger = document.querySelector("#menu");
  const menuOptions = document.querySelector("#menuOptions");
  const overview = document.querySelector("#parkInfo");

  if (menuTrigger && menuOptions) {
    menuTrigger.addEventListener("click", () => {
      menuOptions.classList.toggle("is-hidden");
    });

    menuOptions.addEventListener("click", (event) => {
      const itemName = event.target.textContent;
      console.log(itemName);
    });
  }

  if (overview) {
    overview.addEventListener("mouseenter", () => {
      overview.classList.add("overlay-hover");
    });

    overview.addEventListener("mouseleave", () => {
      overview.classList.remove("overlay-hover");
    });
  }
}

addEventListeners();