const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function() {
  downloadBtn.disabled = true;
  downloadBtn.textContent = 'Downloading...';

  // Create a link element
  const link = document.createElement('a');
  link.href = 'system_search_202503281128398916042148766458854.csv';
  link.download = 'data.csv';

  // Add event listener for when download completes
  link.addEventListener('click', function() {
    // Use load event to detect when file has been downloaded
    window.addEventListener('focus', function() {
      // Re-enable button when window regains focus (download dialog closes)
      downloadBtn.disabled = false;
      downloadBtn.textContent = 'Download';
    }, { once: true });
  });

  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});