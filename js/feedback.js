const modalOpen = document.querySelector(".footer-button");
const modal = document.querySelector(".modal-feedback");
const modalClose = document.querySelector(".button-close");
const modalForm = document.querySelector(".feedback-form");
const modalName = document.querySelector(".form-input-name");
const modalEmail = document.querySelector(".form-input-email");
const modalTextarea = document.querySelector(".textarea-write-us");
const storageName = localStorage.getItem("name");
const storageEmail = localStorage.getItem("email");

let isStorageSupport = true;
let storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalOpen.addEventListener("click", function (evt) {
	evt.preventDefault();	
	modal.classList.add("modal-feedback-show");
	if (storageName) {
		modalName.value = storageName;
		modalEmail.focus();
	} else {
		modalName.focus();
	}
	if (storageEmail) {
		modalEmail.value = storageEmail;
		modalTextarea.focus();
	}	else {
		modalEmail.focus();
	}
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-feedback-show");
	modalName.classList.remove("modal-feedback-error");
	modalEmail.classList.remove("modal-feedback-error");
	modalTextarea.classList.remove("modal-feedback-error");
});

modalForm.addEventListener("submit", function (evt) {
	if (!modalName.value || !modalEmail.value || !modalTextarea.value) {
		evt.preventDefault();
		modalName.classList.remove("modal-feedback-error");
		modalName.offsetWidth = modalName.offsetWidth;
		modalName.classList.add("modal-feedback-error");
		modalEmail.classList.remove("modal-feedback-error");
		modalEmail.offsetWidth = modalEmail.offsetWidth;
		modalEmail.classList.add("modal-feedback-error");
		modalTextarea.classList.remove("modal-feedback-error");
		modalTextarea.offsetWidth = modalTextarea.offsetWidth;
		modalTextarea.classList.add("modal-feedback-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", modalName.value);
			localStorage.setItem("email", modalEmail.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-feedback-show");
      modalName.classList.remove("modal-feedback-error");
			modalEmail.classList.remove("modal-feedback-error");
			modalTextarea.classList.remove("modal-feedback-error");
    }
  }
});
