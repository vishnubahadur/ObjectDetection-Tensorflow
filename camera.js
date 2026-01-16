// script.js
const video = document.getElementById('cameraFeed');
const startButton = document.getElementById('startButton');
const closeCam = document.getElementById('close')

// Function to start the camera
async function startCamera() {
  
    try {
        // Request access to the video input
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false , facingMode:"user"});
        // Set the stream as the source of the video element
        video.srcObject = stream;
        // Start playing the video  
        video.play();
    } catch (err) {
        // Handle cases where the user denies permission or an error occurs
        console.error('Error accessing the camera:', err);
        alert('Unable to access the camera. Please allow permission.');
    }
}
//stop camera stream
function closeStream() {
    if (video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
    video.style.visibility = "hidden"
    closeCam.style.visibility = "hidden"
}

// Add an event listener to the start button
startButton.addEventListener('click', ()=>{
    video.style.visibility = "visible"
    closeCam.style.visibility = "visible"
    startCamera();
});

//add event listner to close button

closeCam.addEventListener("click",closeStream)
