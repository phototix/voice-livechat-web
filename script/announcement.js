// JavaScript to create a "飘屏" effect with styled text and avatar
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
            const { text, avatar } = message; // Expecting message object with `text` and `avatar` properties

            // Create wrapper for avatar and message
            const messageWrapper = document.createElement('div');
            messageWrapper.style.position = 'absolute';
            messageWrapper.style.display = 'flex';
            messageWrapper.style.alignItems = 'center';
            messageWrapper.style.whiteSpace = 'nowrap';
            messageWrapper.style.fontSize = '18px';
            messageWrapper.style.fontWeight = 'bold';
            messageWrapper.style.color = '#fff';
            messageWrapper.style.padding = '5px 10px';
            messageWrapper.style.borderRadius = '20px';
            messageWrapper.style.background = 'linear-gradient(90deg, #6200ea, #00c4ff)';
            messageWrapper.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            messageWrapper.style.top = `${Math.random() * 50}px`;
            messageWrapper.style.left = '100%';

            // Create avatar image
            const avatarImage = document.createElement('img');
            avatarImage.src = avatar;
            avatarImage.style.width = '30px';
            avatarImage.style.height = '30px';
            avatarImage.style.borderRadius = '50%';
            avatarImage.style.marginRight = '10px';

            // Create message text
            const messageText = document.createElement('span');
            messageText.innerText = text;

            // Append avatar and text to wrapper
            messageWrapper.appendChild(avatarImage);
            messageWrapper.appendChild(messageText);

            container.appendChild(messageWrapper);

            // Animate the message
            const startLeft = window.innerWidth;
            const endLeft = -messageWrapper.offsetWidth;

            const animation = messageWrapper.animate(
                [{ left: `${startLeft}px` }, { left: `${endLeft}px` }],
                {
                    duration: 10000,
                    iterations: 1,
                    easing: 'linear',
                }
            );

            // Remove the message after animation ends
            animation.onfinish = () => messageWrapper.remove();
        });
    }

    // Start checking for updates
    setInterval(fetchAnnouncements, checkInterval);

    // Initial fetch
    fetchAnnouncements();
})();
