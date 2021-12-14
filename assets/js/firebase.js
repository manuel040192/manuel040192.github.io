// const firebaseConfig = ...

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var email = getElementVal("email");
var msgContent = getElementVal("msgContent");

saveMessages(name, email, msgContent);

//   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, msgContent) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
    name: name,
    email: email,
    msgContent: msgContent,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};ee
