// script.js

function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.continuous = false; // Stops when a single word is spoken
    recognition.interimResults = false; // Only final results
  
    recognition.onresult = (event) => {
      const word = event.results[0][0].transcript.toUpperCase();
      document.getElementById("spoken-word").innerText = word;
      highlightKeys(word);
    };
  
    recognition.onerror = (event) => {
      alert("Speech recognition error: " + event.error);
    };
  
    recognition.start();
  }
  
  function highlightKeys(word) {
    // Remove previous highlights
    document.querySelectorAll(".highlight").forEach((key) => key.classList.remove("highlight"));
  
    // Highlight the current word's letters with a glowing effect
    word.split("").forEach((letter) => {
      const key = document.getElementById(`key-${letter}`);
      if (key) {
        key.classList.add("highlight");
      }
    });
  }
  