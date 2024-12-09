function showContent(city, button) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    var selectedContent = document.getElementById(city);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    var buttons = document.querySelectorAll('.btn-custom');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

function adjustStartOffset() {
    const textPath = document.getElementById('fame');
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
        textPath.setAttribute('startOffset', '25%'); // Small screens
    } else if (screenWidth >= 580 && screenWidth < 755) {
        textPath.setAttribute('startOffset', '10%'); // Medium screens
    } else if (screenWidth >= 755 && screenWidth < 990) {
        textPath.setAttribute('startOffset', '15%'); // Medium screens
    } else if (screenWidth >= 990 && screenWidth < 1500) {
        textPath.setAttribute('startOffset', '15%'); // Large screens
    } else {
        textPath.setAttribute('startOffset', '15%'); // Extra large screens
    }
}


$(document).ready(function(){
    // Show scroll-up button when the document is ready
    $('.scroll-up-btn').addClass('show');
    
    // Scroll to top script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Remove smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    });



