// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const downloadBtn = document.getElementById('downloadBtn');
    const printBtn = document.getElementById('printBtn');

    // Print functionality
    printBtn.addEventListener('click', function() {
        window.print();
    });

    // Download as PDF functionality (simulated)
    downloadBtn.addEventListener('click', function() {
        // In a real implementation, you would use a library like jsPDF or html2pdf
        alert('PDF download functionality would be implemented here.\n\nFor now, you can use the Print button and save as PDF from the print dialog.');
        
        // Alternative: Trigger print dialog which allows saving as PDF
        // window.print();
    });

    // Add smooth scroll behavior for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    console.log('CV page loaded successfully!');
});
