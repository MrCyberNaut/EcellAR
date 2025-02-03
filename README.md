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

#usage
Usage
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
