navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  alert("Microphone access granted!)");
  window.close();
});
