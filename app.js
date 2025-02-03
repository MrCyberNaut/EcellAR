document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
  
    // Create status display
    const statusDisplay = document.createElement('div');
    statusDisplay.style.position = 'absolute';
    statusDisplay.style.top = '10px';
    statusDisplay.style.left = '10px';
    statusDisplay.style.color = 'white';
    statusDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    statusDisplay.style.padding = '10px';
    statusDisplay.style.zIndex = '1000';
    document.body.appendChild(statusDisplay);
  
    scene.addEventListener('arReady', () => {
      console.log('MindAR is ready');
      statusDisplay.innerHTML = 'MindAR is ready';
    });
  
    scene.addEventListener('arError', () => {
      console.log('MindAR failed to start');
      statusDisplay.innerHTML = 'MindAR failed to start';
    });
  
    const startButton = document.createElement('button');
    startButton.innerHTML = 'Start AR';
    document.body.appendChild(startButton);
  
    startButton.addEventListener('click', async () => {
      await scene.systems["mindar-image"].start();
      startButton.style.display = 'none';
      statusDisplay.innerHTML = 'Scanning for targets...';
    });
  
    const overlayEntity = document.querySelector('#overlay-entity');
    const overlayVideo = document.querySelector('#overlay-video');
  
    // Attempt to play video on load (user interaction may be required)
    overlayVideo.play().catch(() => {
      console.log('Autoplay blocked. User interaction required.');
    });
  
    overlayVideo.addEventListener('loadeddata', () => {
      console.log('Overlay video loaded successfully');
    });
  
    overlayVideo.addEventListener('error', (e) => {
      console.error('Error loading video:', e);
    });
  
    scene.addEventListener('targetFound', () => {
      console.log('Target found');
      statusDisplay.innerHTML = 'Target found!';
      overlayEntity.setAttribute('visible', true);
  
      // Ensure video is playing and texture is updated
      overlayVideo.play();
      if (overlayEntity.components.material) {
        overlayEntity.components.material.material.map.needsUpdate = true;
      }
    });
  
    scene.addEventListener('targetLost', () => {
      console.log('Target lost');
      statusDisplay.innerHTML = 'Target lost. Scanning...';
      overlayEntity.setAttribute('visible', false);
      overlayVideo.pause();
    });
  
    // Camera adjustments (if needed)
    const camera = document.querySelector('a-camera');
    camera.setAttribute('position', '0 0 0');
    camera.setAttribute('look-controls-enabled', 'false');
    camera.setAttribute('camera', 'active: true');
  });
  