
    window.onload = function() {
        // Replace top bar with custom logo
        const topbar = document.querySelector('.swagger-ui .topbar');
        if (topbar) {
            topbar.innerHTML = `
                <div style="display: flex; align-items: center; padding: 0 20px;">
                    <img src="./logo.png" alt="Logo" style="height: 40px; margin-right: 10px;">
                    <a href="https://t.me/cyberline_official" style="font-size: 18px; text-decoration: none; color: white;">Cyberline API</a>
                </div>
            `;
        }
    };
    
