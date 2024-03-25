// This script assumes you have elements in your HTML to interact with, such as download links for images.
document.addEventListener('DOMContentLoaded', function() {
    // Simulate dynamic loading of categories
    loadCategories();

    // Setup download functionality for wallpapers
    setupDownloadLinks();
});

function loadCategories() {
    // Placeholder for loading categories dynamically
    // In a real scenario, you might fetch this data from a server
    const categories = ['Celebrities', 'Nature', 'Abstract', 'Animals', 'Cars', 'Fantasy'];
    const categoryContainer = document.querySelector('.category-list');
    if (categoryContainer) {
        categoryContainer.innerHTML = ''; // Clear existing content
        categories.forEach(category => {
            const link = document.createElement('a');
            link.href = `${category.toLowerCase()}.html`; // Assuming the naming convention for category pages
            link.textContent = category;
            categoryContainer.appendChild(link);
        });
    }
}

function setupDownloadLinks() {
    // Assuming each downloadable image has a 'download-image' class
    const downloadLinks = document.querySelectorAll('.download-image');
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            downloadImage(link.getAttribute('href')); // Download the image
        });
    });
}

function downloadImage(imageUrl) {
    // For demonstration, this will just log the image URL
    // To actually download images, server-side handling or specific client-side techniques are required
    console.log(`Downloading image from: ${imageUrl}`);

    // Example of client-side download (if CORS policies allow):
    // Create an 'a' element with a 'download' attribute and trigger a click on it
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = ''; // The 'download' attribute can have a value to suggest a filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
