const profilecontacts = document.querySelector("#profile_contacts");
const showContactsText = document.getElementById("show_contacts_text");

const HIDDEN_CLASSNAME = "hidden";

console.log(profilecontacts);
console.log(showContactsText);

function handleMouseEnter() {
  showContactsText.classList.add(HIDDEN_CLASSNAME);
  profilecontacts.classList.remove(HIDDEN_CLASSNAME);
}

function handleMouseLeaver() {
  showContactsText.classList.remove(HIDDEN_CLASSNAME);
  profilecontacts.classList.add(HIDDEN_CLASSNAME);
}

showContactsText.addEventListener("mouseenter", handleMouseEnter);
profilecontacts.addEventListener("mouseleave", handleMouseLeaver);
