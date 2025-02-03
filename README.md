# WebAR using MindAR Video Demo

This project is a simple AR experience demo using [MindAR](https://hiukim.github.io/mind-ar-js-doc/) and [A-Frame](https://aframe.io/). When a target image is detected, a video overlay is displayed on the target. This demo is optimized for both desktop and mobile devices.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
  - [Running on Desktop](#running-on-desktop)
  - [Running on Mobile (Phone)](#running-on-mobile-phone)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **MindAR Integration:** Uses MindAR for image target detection.
- **Video Overlay:** Plays a video overlay when the target image is detected.
- **User Feedback:** Displays status updates (e.g., "MindAR is ready", "Target found", "Target lost").

## Demo

[Include a link to a live demo if you have one, for example via GitHub Pages.]

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/mindar-video-demo.git
   cd mindar-video-demo


[Usage]
Running on Desktop
Start the Local Server:
Follow the installation instructions above and run your server.

Access the URL:
Open your browser (Chrome, Firefox, etc.) and navigate to the local server URL (e.g., http://localhost:8080).

Start the AR Experience:

Click the "Start AR" button to initiate the MindAR system.
The status message will update to "Scanning for targets...".
Point your camera at the target image to see the video overlay.
Running on Mobile (Phone)
Ensure Browser Compatibility:

Use a mobile browser that supports WebXR and camera access.
Android: Use Chrome (or any WebXR-enabled browser).
iOS: Safari has limited support; for best results, consider using Chrome if available or test using a WebXR viewer.
Connect Your Phone to the Same Network:

Make sure your phone is connected to the same local network as your development machine.
Find Your Computer's Local IP Address:

On Windows, run ipconfig in Command Prompt.
On macOS/Linux, run ifconfig in Terminal.
Note your computer's local IP address (e.g., 192.168.1.100).
Access the Local Server from Your Phone:

Open your mobile browser.
Enter the URL using your computer’s local IP and the port provided by your server (e.g., http://192.168.1.100:8080).
Allow Camera Access:

When prompted, allow camera access on your mobile browser.
Start the AR Experience:

Tap the "Start AR" button to initialize the AR experience.
Hold your phone steady and point it at the target image.
Once detected, the video overlay will appear on the target.


[Troubleshooting]
Camera Access Issues:
Ensure that your browser has permission to access the camera. Running on HTTPS or localhost is recommended.

Asset Loading Errors:
Check the browser console for any asset loading errors. Make sure all file paths are correct.

Target Not Detected:
Verify that the target image and targets.mind file are correctly configured. Make sure the lighting conditions are adequate.


---
[License]
### How to Use

1. **Clone and Set Up:** Follow the instructions above to clone the repository and set up the local server.
2. **Testing on Your Phone:**  
   - Connect your phone to the same network.
   - Access the demo via your phone’s browser using your computer's local IP.
   - Tap the "Start AR" button and point your camera at the target image.

Feel free to adjust or extend this README based on your project needs or any additional setup instructions.

