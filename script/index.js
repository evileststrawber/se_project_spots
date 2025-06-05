const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileform = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__exit-image");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostImageEl = document.querySelector(".modal__image-input");
const newPostCaptionEl = document.querySelector(".modal__caption-input");

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  modal.addEventListener("transitionend", function handler() {
    modal.style.visibility = "hidden";
    modal.removeEventListener("transitionend", handler);
  });
}

function openModal(modal) {
  modal.style.visibility = "visible";
  requestAnimationFrame(() => {
    modal.classList.add("modal_is-opened");
  });
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  closeModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileform.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  newPostImageInput.textContent = newPostImageInput.value;
  newPostCaptionInput.textContent = newPostCaptionInput.value;
  console.log(newPostImageInput.value);
  console.log(newPostCaptionInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
