function toggleIcons() {
    const iconGroup = document.getElementById('icon-group');
    if (iconGroup.style.display === 'flex') {
        iconGroup.style.display = 'none';
    } else {
        iconGroup.style.display = 'flex';
    }
}

// Get input search element
var searchInput = document.querySelector('.search-input-header');
// Get search icon element
var searchIcon = document.querySelector('.search-icon');
// Get modal element
var modal = document.getElementById('inbox-popup');
// Get modal content element
var modalContent = document.querySelector('.modal-content');
// Get open modal button
var inboxIcon = document.querySelector('.icon-item img[alt="Inbox"]');
// Get task and inbox icon items
var taskIconItem = document.querySelector('.icon-item img[alt="Task"]').parentElement;
var inboxIconItem = inboxIcon.parentElement;

// Add click event listener to search input
searchInput.addEventListener('focus', function() {
    // Hide search icon
    searchIcon.style.display = 'none';
});

// Add blur event listener to search input
searchInput.addEventListener('blur', function() {
    // Show search icon
    searchIcon.style.display = 'inline-block'; // Ubah menjadi 'inline-block' agar ikon dapat muncul kembali
});

// Listen for open click
inboxIcon.onclick = function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the window
    modal.style.display = 'block';
    // Hide the action-icon
    var actionIcon = document.querySelector('.floating-icons .action-icon');
    if (actionIcon) {
        actionIcon.style.display = 'none';
    }
    // Shift task and inbox icons to the right
    taskIconItem.classList.add('shift-right');
    inboxIconItem.classList.add('shift-right');
}

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target != modal && !modal.contains(event.target) && event.target != inboxIcon) {
        modal.style.display = 'none';
        // Show the action-icon
        var actionIcon = document.querySelector('.floating-icons .action-icon');
        if (actionIcon) {
            actionIcon.style.display = 'block';
        }
        // Reset position of task and inbox icons
        taskIconItem.classList.remove('shift-right');
        inboxIconItem.classList.remove('shift-right');
    }
}

// Prevent modal from closing when clicking inside modal content
modalContent.onclick = function(event) {
    event.stopPropagation();
}
