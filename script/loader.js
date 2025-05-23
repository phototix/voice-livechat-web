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
  splashScreen.style.backgroundColor = '#0d0b18'; // Background color
  splashScreen.style.display = 'flex';
  splashScreen.style.alignItems = 'center';
  splashScreen.style.justifyContent = 'center';
  splashScreen.style.zIndex = '10000';

  // Add image to the splash screen
  const splashImage = document.createElement('img');
  splashImage.src = '/assets/splash.png?version=1'; // Replace with your splash.jpg path
  splashImage.alt = 'Splash Screen';
  splashImage.style.width = '70%';
  splashImage.style.height = 'auto';
  splashScreen.appendChild(splashImage);

  // Append splash screen to the body
  document.body.appendChild(splashScreen);

  // Remove splash screen after loading
  window.addEventListener('load', () => {
    setTimeout(() => {
      splashScreen.remove();
    }, 500); // Adjust time in milliseconds
  });
}

// Ensure the DOM is ready before creating the splash loader
document.addEventListener('DOMContentLoaded', createSplashLoader);
