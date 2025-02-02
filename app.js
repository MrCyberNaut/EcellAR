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

    scene.addEventListener('arReady', (event) => {
        console.log('MindAR is ready');
        statusDisplay.innerHTML = 'MindAR is ready';
    });

    scene.addEventListener('arError', (event) => {
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
    
    scene.addEventListener('targetFound', (event) => {
        console.log('target found');
        statusDisplay.innerHTML = 'Target found!';
        overlayEntity.setAttribute('visible', true);
    });

    scene.addEventListener('targetLost', (event) => {
        console.log('target lost');
        statusDisplay.innerHTML = 'Target lost. Scanning...';
        overlayEntity.setAttribute('visible', false);
    });

    // Make camera full screen
    const camera = document.querySelector('a-camera');
    camera.setAttribute('position', '0 0 0');
    camera.setAttribute('look-controls-enabled', 'false');
    camera.setAttribute('camera', 'active: true');
});
