const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function() {
  downloadBtn.disabled = true;
  downloadBtn.textContent = 'Downloading...';

  // Create a link element
  const link = document.createElement('a');
  link.href = 'system_search_202503281128398916042148766458854.csv';
  link.download = 'data.csv'; // Name that will appear when downloading

  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Reset button state after a short delay
  setTimeout(function() {
    downloadBtn.disabled = false;
    downloadBtn.textContent = 'Download';
  }, 1000);
});