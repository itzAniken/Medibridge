// JavaScript to handle dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(function (dropdown) {
    dropdown.addEventListener('click', function (e) {
        // Prevent the link from navigating
        e.preventDefault();

        // Find the dropdown menu for this item
        const menu = this.nextElementSibling;

        // Toggle the dropdown visibility
        if (menu.style.display === 'block') {
            menu.style.display = 'none';  // Close the dropdown
        } else {
            // Close all open dropdowns before opening this one
            document.querySelectorAll('.dropdown-menu').forEach(function (openMenu) {
                openMenu.style.display = 'none';
            });
            menu.style.display = 'block';  // Open the dropdown
        }
    });
});

// Close the dropdowns if the user clicks anywhere outside of them
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
            menu.style.display = 'none';
        });
    }
});
