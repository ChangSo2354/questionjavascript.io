var btnNo = document.querySelector('.btnNo');
        var btnYes = document.querySelector('.btnYes');
        var text = document.querySelector('.text');

        // Move "No" button randomly when hovered
        btnNo.addEventListener('mouseover', function() {
            var leftRandom = Math.floor(Math.random() * 101);
            var topRandom = Math.floor(Math.random() * 101);
            btnNo.style.left = leftRandom + "%";
            btnNo.style.top = topRandom + "%";
        });

        // Change text when "Yes" is clicked
        btnYes.addEventListener('click', function() {
            text.innerHTML = "Yes, I love you too!";
        });