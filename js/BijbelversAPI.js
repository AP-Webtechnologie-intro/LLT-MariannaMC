function searchVerse() {
  const verseInput = document.getElementById('verseInput').value;
  const verseDisplay = document.getElementById('verseDisplay');

  const apiUrl = `https://labs.bible.org/api/?passage=${verseInput}&type=json`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      if (data && data.length > 0) {
          const verseText = data[0].text;
          verseDisplay.innerHTML = `<p><strong>${verseInput}:</strong> ${verseText}</p>`;
      } else {
          verseDisplay.innerHTML = '<p>Verse not found.</p>';
      }
  })
  .catch(error => {
      console.error('Error fetching Bible verse:', error);
      verseDisplay.innerHTML = '<p>Error fetching verse. Please try again later.</p>';
  });
}