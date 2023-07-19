document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('button02');
    var selectedCards = document.querySelectorAll('.card002');
    var cardContainer = document.getElementById('cardContainer');
    var automatedCard = document.getElementById('automatedCard');
    var messageElement = document.getElementById('manu');
    var selectedCard = null;
  
    playButton.addEventListener('click', function() {
      if (!selectedCard) {
        messageElement.textContent = 'Please select any card';
      } else {
        cardContainer.classList.add('animated');
  
        setTimeout(function() {
          cardContainer.classList.remove('animated');
          automatedCard.classList.remove('hidden');
  
          var randomIndex = Math.floor(Math.random() * 10);
          var selectedCardImgSrc = selectedCard.getAttribute('src');
          var randomCardImgSrc = document.getElementById('card' + randomIndex).querySelector('img').getAttribute('src');
  
          automatedCard.innerHTML = '<img src="' + randomCardImgSrc + '">';
  
          if (selectedCardImgSrc === randomCardImgSrc) {
            messageElement.textContent = 'Congratulations! You won';
            messageElement.style.color = "green";
          } else {
            messageElement.textContent = 'Sorry, you lose';
            messageElement.style.color = "red";
          }
  
          selectedCard = null; // Clear the selected card after result
        }, 3000);
      }
    });
  
    selectedCards.forEach(function(card) {
      card.addEventListener('click', function() {
        if (this === selectedCard) {
          return; // Do nothing if the same image is clicked again
        }
  
        selectedCards.forEach(function(card) {
          card.classList.remove('selected');
        });
  
        this.classList.add('selected');
        selectedCard = this;
        automatedCard.innerHTML = ''; // Clear previous generated image
        messageElement.textContent = ''; // Clear previous result message
      });
    });
  });
  