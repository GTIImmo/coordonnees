const params = new URLSearchParams(window.location.search);
const nom = params.get("nom") || "";
const prenom = params.get("prenom") || "";
const tel = params.get("telephone") || "";
const email = params.get("email") || "";
const agence = params.get("agence") || "";
const adresse = params.get("adresse") || "";

document.getElementById("nom").textContent = nom;
document.getElementById("prenom").textContent = prenom;
document.getElementById("tel").textContent = tel;
document.getElementById("tel").href = "tel:" + tel;
document.getElementById("email").textContent = email;
document.getElementById("email").href = "mailto:" + email;
document.getElementById("agence").textContent = agence;
document.getElementById("adresse").textContent = adresse;

document.getElementById("btnCall").href = "tel:" + tel;
document.getElementById("btnMail").href = "mailto:" + email;
