

// Sélection du formulaire par son ID
let monFormulaire = document.getElementById('contactForm');

// Ajouter un événement lorsque le formulaire est envoyé
monFormulaire.addEventListener('submit', function(event) {
  // Empêcher le formulaire de se soumettre normalement
  event.preventDefault();

  // Afficher un message de confirmation
  alert('Merci beaucoup ! Votre message a bien été reçu.');
});
