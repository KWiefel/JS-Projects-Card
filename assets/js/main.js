// Erstelle eine Klasse zu einem Thema mit verschiedenen Merkmalen/Eigenschaften
// (z.B. Musiker: Künstlername, Alter, verkaufte Singles/Alben etc.
// Erstelle eine Formular und ein Button im HTML für die Herstellung einer Paninikarte.
// Erstelle eine Methode, um die Karte in HTML anzuzeigen.
// Style die Paninikarte mithilfe des Gridsystems.

const inputFirstName = document.body.querySelector("#firstName");
const inputLastName = document.body.querySelector("#lastName");
const inputNumberAlbum = document.body.querySelector("#numberAlbum");
const inputAge = document.body.querySelector("#age");
const inputUrl = document.body.querySelector("#inputUrl");

class Card {
  constructor(firstName, lastName, age, numberAlbum, imageUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberAlbum = numberAlbum;
    this.age = age;
    this.imageUrl = imageUrl;
  }
}

const addCard = () => {
  let output = document.body.querySelector("#output");
  const newCard = new Card(
    inputFirstName.value,
    inputLastName.value,
    inputAge.value,
    inputNumberAlbum.value,
    inputUrl.value
  );
  output.innerHTML += `<div class="card__wrapper"><div class ="card__text">
  <h3>First Name: ${newCard.firstName}</h3>
  <h4>Last Name: ${newCard.lastName}</h4>
  <p>Number of Albums: ${newCard.numberAlbum} </p>
  <p>Age: ${newCard.age} </p></div>
  <img src=" ${newCard.imageUrl}" alt="ProfilePicture"></div>`;
};
