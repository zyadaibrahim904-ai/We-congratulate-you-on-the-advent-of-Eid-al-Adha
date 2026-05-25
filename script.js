const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const nameInput = document.getElementById('nameInput');
const inputSection = document.getElementById('input-section');
const greetingSection = document.getElementById('greeting-section');
const displayName = document.getElementById('displayName');
const eidAudio = document.getElementById('eidAudio');

submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name !== "") {
        displayName.textContent = name;
        inputSection.style.display = 'none';
        greetingSection.style.display = 'block';
        
        eidAudio.play();
    }
});

resetBtn.addEventListener('click', function() {
    nameInput.value = "";
    inputSection.style.display = 'block';
    greetingSection.style.display = 'none';
    
    eidAudio.pause();
    eidAudio.currentTime = 0; 
});