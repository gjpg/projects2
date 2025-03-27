document.addEventListener('DOMContentLoaded', function() {
    // Highlight the first item by default
    document.querySelector('#project-list li:first-child').classList.add('active');
    
    // Rest of your event listener code...
    const listItems = document.querySelectorAll('#project-list li');
    const images = document.querySelectorAll('#project-img-container img');
  
    listItems.forEach(item => {
      item.addEventListener('click', function() {
        // Hide all images
        images.forEach(img => img.style.display = 'none');
        
        // Show corresponding image
        const imageId = 'sample' + (Array.from(listItems).indexOf(this) + 1);
        document.getElementById(imageId).style.display = 'block';
        
        // Update active state
        listItems.forEach(li => li.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });