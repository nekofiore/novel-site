// Listener script for a 'Chapter' page

// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // 'keydown' event listener
    document.addEventListener('keydown', function(e) {
        // on 'left arrow', go to the previous chapter
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            document.getElementById('prevPage').click();
        }
        // on 'right arrow', go to the next chapter
        else if (e.key === 'ArrowRight') {
            e.preventDefault();
            document.getElementById('nextPage').click();
        }
    });
});
