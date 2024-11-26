// JavaScript to create a "飘屏" effect
(function () {
    const announcementUrl = '/cache/effect_annoucement.json'; // Update this path to your JSON file
    const checkInterval = 5000; // Interval to check for updates (in milliseconds)
    let lastUpdateTimestamp = null;

    // Create container for announcements
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    // Fetch JSON and display announcements
    async function fetchAnnouncements() {
        try {
            const response = await fetch(announcementUrl, { cache: 'no-cache' });
            const data = await response.json();

            if (!lastUpdateTimestamp || data.timestamp !== lastUpdateTimestamp) {
                lastUpdateTimestamp = data.timestamp;
                showAnnouncements(data.messages || []);
            }
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    }

    // Show announcements with floating effect
    function showAnnouncements(messages) {
        container.innerHTML = ''; // Clear previous announcements

        messages.forEach((message) => {
            const messageElement = document.createElement('div');
            messageElement.style.position = 'absolute';
            messageElement.style.whiteSpace = 'nowrap';
            messageElement.style.fontSize = '24px';
            messageElement.style.fontWeight = 'bold';
            messageElement.style.color = '#fff';
            messageElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';
            messageElement.style.background = 'rgba(0,0,0,0.5)';
            messageElement.style.padding = '5px 10px';
            messageElement.style.borderRadius = '5px';
            messageElement.style.top = `${Math.random() * 50}px`;
            messageElement.style.left = '100%';

            messageElement.innerText = message;

            container.appendChild(messageElement);

            // Animate the message
            const startLeft = window.innerWidth;
            const endLeft = -messageElement.offsetWidth;

            const animation = messageElement.animate(
                [{ left: `${startLeft}px` }, { left: `${endLeft}px` }],
                {
                    duration: 10000,
                    iterations: 1,
                    easing: 'linear',
                }
            );

            // Remove the message after animation ends
            animation.onfinish = () => messageElement.remove();
        });
    }

    // Start checking for updates
    setInterval(fetchAnnouncements, checkInterval);

    // Initial fetch
    fetchAnnouncements();
})();
