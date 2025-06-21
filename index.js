document.addEventListener('DOMContentLoaded', function() {
        let ouiButton = document.getElementById('oui');
        let nonButton = document.getElementById('non');
        let jspButton = document.getElementById('jsp');
        let ouiVideo = document.getElementById('oui-video');
        let danseur = document.getElementById('danseur');
        let btnGroup = document.querySelector('.btn-group');
        let h1 = document.querySelector('h1');
        let h2 = document.querySelector('h2');

    ouiButton.addEventListener('click', function() {
            danseur.style.display = 'block';
            confetti({
                origin: {x:0, y: 1 },
                angle: 60,
                spread: 90,
                particleCount: 80,
                startVelocity: 45
                // nombre + vitesse (px.s)
            });
            confetti({
                origin: {x: 1, y:1 },
                angle: 120,
                spread: 90,
                particleCount: 80,
                startVelocity: 45 
            });

            for (let i = 0; i <= 1; i += 0.1) {
                confetti({
                    origin: { x: i, y: 0 },
                    angle: 90,
                    spread: 150,
                    particleCount: 15,
                    startVelocity: 15,
                    gravity: 0.3,
                    ticks: 1500
                });
            }
            danseur.style.display = 'block';
            btnGroup.style.display = 'none';
            h1.textContent = "Let's gooo";
            h2.textContent = "mon insta : jullie.srx";
            h2.style.display = "block";
    });

    jspButton.addEventListener('click', function() {
            ouiVideo.style.display = 'block';
            btnGroup.style.display = 'none';
            h1.textContent = "et hop rickrolled";
            h2.style.display = "none";
            ouiVideo.muted = false;
            ouiVideo.currentTime = 0;
            ouiVideo.play();
    });

        let Afui = 0;
        let Parti = false;

        nonButton.addEventListener('mouseenter', function(e) {

            if (Parti) return;
            Afui++;
            let btnRect = nonButton.getBoundingClientRect();

            let maxX = window.innerWidth - btnRect.width - 100;
            let maxY = window.innerHeight - btnRect.height - 150;

            let newX, newY;

            if (Afui >= 8) {
                Parti = true;
                newX = -btnRect.width - 100;
                newY = 300;
            } else {
                newX = Math.random() * maxX;
                newY = Math.random() * maxY;
            }

            nonButton.style.position = 'absolute';
            nonButton.style.left = newX + "px";
            nonButton.style.top = newY + "px";
            nonButton.style.transition = 'left 0.2s, top 0.2s';
        });
        nonButton.addEventListener('click', function() {
            nonButton.style.display = 'none'; 
            ouiButton.style.background = 'linear-gradient(135deg, #ff0000 0%, #b80000 100%)';
            ouiButton.style.color = '#fff';
        });
    });