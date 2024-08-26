
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var openModal = document.getElementById('open-modal');
    var closeModal = document.getElementById('close-modal');

    // Open the modal
    openModal.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link action
        modal.style.display = 'block'; // Show the modal
    });

    // Close the modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal if the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});