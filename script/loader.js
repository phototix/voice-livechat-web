
  // Create the splash loader and append to the DOM
  function createSplashLoader() {
    // Create splash screen container
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.style.position = 'fixed';
    splashScreen.style.top = '0';
    splashScreen.style.left = '0';
    splashScreen.style.width = '100%';
    splashScreen.style.height = '100%';
    splashScreen.style.backgroundColor = '#000'; // Background color
    splashScreen.style.display = 'flex';
    splashScreen.style.alignItems = 'center';
    splashScreen.style.justifyContent = 'center';
    splashScreen.style.zIndex = '10000';

    // Add image to the splash screen
    const splashImage = document.createElement('img');
    splashImage.src = '/assets/splash.jpg'; // Replace with your splash.jpg path
    splashImage.alt = 'Splash Screen';
    splashImage.style.width = 'auto';
    splashImage.style.height = 'auto';
    splashScreen.appendChild(splashImage);

    // Append splash screen to the body
    document.body.appendChild(splashScreen);

    // Remove splash screen after loading
    window.addEventListener('load', () => {
      setTimeout(() => {
        splashScreen.remove();
      }, 3000); // Adjust time in milliseconds
    });
  }

  // Initialize the splash loader
  createSplashLoader();
