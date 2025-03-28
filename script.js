const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function() {
  downloadBtn.disabled = true;
  downloadBtn.textContent = 'Downloading...';

  // I used setTimeout function just to simulate a download process
  setTimeout(function() {
    // After the "download" is complete:
    downloadBtn.disabled = false;
    downloadBtn.textContent = 'Download';
  }, 5000); // 5 seconds
});