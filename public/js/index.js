import "@babel/polyfill";
import { login, logout } from "./login";
import { updateSettings } from "./updateSettings";
import { displayMap } from "./leafletMap";
import { bookTour } from "./stripe";
import { showAlert } from "./alerts";
import { logGame, editLog } from "./logGame";
import { followUser, unfollowUser } from "./followingApi";

// DOM ELEMENTS
const leafletMap = document.getElementById("map");
const loginForm = document.querySelector(".form--login");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");
const bookBtn = document.getElementById("book-tour");
const searchBtn = document.getElementById("search-game");
const logBtn = document.getElementById("logBtn");
const reviewForm = document.querySelector(".form--review");
const followForm = document.querySelector(".form--follow");
const unfollowForm = document.querySelector(".form--unfollow");

//DELEGATION
if (leafletMap) {
  const locations = JSON.parse(leafletMap.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}
if (logOutBtn) logOutBtn.addEventListener("click", logout);

if (userDataForm) {
  userDataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("username", document.getElementById("username").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    updateSettings(form, "data");
  });
}
if (userPasswordForm) {
  userPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const saveBtn = document.querySelector(".btn--save--password");
    saveBtn.textContent = "Updating...";
    saveBtn.disabled = true;

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
    saveBtn.textContent = "Save Password";
    saveBtn.disabled = false;
  });
}

if (bookBtn)
  bookBtn.addEventListener("click", (e) => {
    e.target.textContent = "Processing...";
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });

const alertMessage = document.querySelector("body").dataset.alert;
if (alertMessage) {
  showAlert("success", alertMessage, 15);
}

//game search
if (searchBtn) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name-search-header").value;
    //redirect to
    window.location.href = `/game/search/${name}`;
  });
}

// log button funcitonality
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const dropdownButton = document.getElementById("dropbtn");
if (dropdownButton) {
  dropdownButton.addEventListener("click", (e) => {
    myFunction();
  });
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}
const wantToPlay = document.getElementById("wantToPlayUpdate");
const havePlayedUPdate = document.getElementById("havePlayedUpdatePlayed");
const deleteRelationship = document.getElementById("deleteRelationship");

logBtn?.addEventListener("click", updateRelationship);
wantToPlay?.addEventListener("click", updateRelationship);
havePlayedUPdate?.addEventListener("click", updateRelationship);
deleteRelationship?.addEventListener("click", updateRelationship);

function updateRelationship(e) {
  e.preventDefault();
  logGame(e.target.dataset);
}

reviewForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const review = document.getElementById("review").value;
  const rating = Number(document.getElementById("rating").value);
  const relationship = document.getElementById("relationshipId").value;
  const game = document.getElementById("gameId").value;

  editLog(review, rating, relationship, game);
});

followForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userId = document.getElementById("selectedUserId").value;
  followUser(userId);
});

unfollowForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const followingId = document.getElementById("followingId").value;
  unfollowUser(followingId);
});
