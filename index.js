    document.addEventListener('DOMContentLoaded', function() {
        const ouiButton = document.getElementById('oui');
        const nonButton = document.getElementById('non');
        const jspButton = document.getElementById('jsp');
        const ouiVideo = document.getElementById('oui-video');
        const danseur = document.getElementById('danseur');
        const btnGroup = document.querySelector('.btn-group');
        const h1 = document.querySelector('h1');
        const h2 = document.querySelector('h2');

        ouiButton.addEventListener('click', function() {
            // Confettis bas gauche
            confetti({
                origin: { x: 0, y: 1 },
                angle: 60,
                spread: 90,
                particleCount: 80,
                startVelocity: 45
            });
            // Confettis bas droit
            confetti({
                origin: { x: 1, y: 1 },
                angle: 120,
                spread: 90,
                particleCount: 80,
                startVelocity: 45
            });

            // Confettis plafond
            for (let i = 0; i <= 1; i += 0.1) {
                confetti({
                    origin: { x: i, y: 0 },
                    angle: 90,
                    spread: 60,
                    particleCount: 15,
                    startVelocity: 15,
                    gravity: 0.3,
                    ticks: 200
                });
            }
            danseur.style.display = 'block';
            btnGroup.style.display = 'none';
            h1.textContent = "let's gooo";
            if (h2) {
                h2.textContent = "mon insta : jullie.srx";
                h2.style.display = "block";
            }
        });

        // vidéo Maybe
        jspButton.addEventListener('click', function() {
            ouiVideo.style.display = 'block';
            btnGroup.style.display = 'none';
            h1.textContent = "et hop rickrolled";
            if (h2) h2.style.display = "none";
        });

        // danseur Oui
        ouiButton.addEventListener('click', function() {
            danseur.style.display = 'block';
        });

        // Non qui fuit
        let escapeCount = 0;
        let isGone = false;

        nonButton.addEventListener('mouseenter', function(e) {
            if (isGone) return;
            escapeCount++;
            const btnRect = nonButton.getBoundingClientRect();

            let maxX = window.innerWidth - btnRect.width - 20;
            let maxY = window.innerHeight - btnRect.height - 20;

            let newX, newY;

            if (escapeCount >= 5) {
                // S'enfuit hors de l'écran
                isGone = true;
                newX = (Math.random() > 0.5 ? -btnRect.width - 100 : window.innerWidth + 100);
                newY = Math.random() * (window.innerHeight - btnRect.height);
            } else {
                // Se décale aléatoirement
                newX = Math.random() * maxX;
                newY = Math.random() * maxY;
            }

            nonButton.style.position = 'fixed';
            nonButton.style.left = `${newX}px`;
            nonButton.style.top = `${newY}px`;
            nonButton.style.transition = 'left 0.2s, top 0.2s';
        });

        // Remet le bouton à sa place si la fenêtre est redimensionnée ou si on recharge
        window.addEventListener('resize', () => {
            if (!isGone) {
                nonButton.style.position = '';
                nonButton.style.left = '';
                nonButton.style.top = '';
                nonButton.style.transition = '';
            }
            // Si on passe sur mobile, on remet le bouton à sa place
            if (window.innerWidth <= 600) {
                nonButton.style.position = '';
                nonButton.style.left = '';
                nonButton.style.top = '';
                nonButton.style.transition = '';
            }
        });

        nonButton.addEventListener('click', function() {
            nonButton.style.display = 'none'; // Le bouton "No" disparaît
            ouiButton.style.background = 'linear-gradient(135deg, #ff0000 0%, #b80000 100%)'; // Le bouton "Yes" devient rouge
            ouiButton.style.color = '#fff';
        });
    });