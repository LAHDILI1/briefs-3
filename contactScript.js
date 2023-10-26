
const formL = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.querySelector('[name="lastName"]');
const phoneNamber = document.querySelector('[name="phoneNamber"]');
const email = document.querySelector('[name="email"]');
const Company = document.querySelector('[name="Company"]');
const Job_title = document.querySelector('[name="Job_title"]');
const message = document.querySelector('[name="message"]');

formL.addEventListener('submit', function (event) {
 
  event.preventDefault();
  
if(firstName.value==='' || firstName.value!=="/^[a-zA-Z\-]+$/"){
    alert( "Veuillez fournir votre nom !" );
}
    if(lastName.value===''){
        alert( "Veuillez fournir votre prénom !" );

}
if(email.value===''){
    alert( "Veuillez fournir votre email !" );

}
if(Company.value===''){
    alert( "Veuillez fournir votre entreprise !" );
}
if(Job_title.value===''){
    alert( "Veuillez fournir votre emploi !" );
}
if(message.value===''){
    alert( "Veuillez fournir votre message !" );
}


  });

 





















/*/
// Sélectionnez le formulaire
const form = document.querySelector('form');

// Écoutez l'événement de soumission du formulaire
form.addEventListener('submit', function (event) {
  // Empêchez la soumission par défaut du formulaire
  event.preventDefault();

  // Sélectionnez les champs d'entrée requis
  const requiredFields = form.querySelectorAll('[required]');

  // Validez chaque champ requis
  let isValid = true;
  requiredFields.forEach(field => {
    if (field.value.trim() === '') {
      isValid = false;
      alert(`Le champ ${field.name} est obligatoire.`);
    }
  });

  // Validez l'adresse e-mail
  const emailField = form.querySelector('[name="email"]');
  const emailValue = emailField.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailValue)) {
    isValid = false;
    alert('Veuillez entrer une adresse e-mail valide.');
  }

  // Si la validation est réussie, vous pouvez soumettre le formulaire
  if (isValid) {
    alert('Formulaire soumis avec succès!');
    form.reset();
  }
});

*/