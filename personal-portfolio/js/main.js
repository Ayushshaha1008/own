// This file contains JavaScript code for interactive features on the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('resume-button');
    
    if (resumeButton) {
        resumeButton.addEventListener('click', function() {
            window.open('assets/resume/resume.pdf', '_blank');
        });
    }
});