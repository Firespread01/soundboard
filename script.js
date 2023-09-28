function playAudio(url) {
    new Audio(url).play();  
}

function stopAudio() {
  location.reload()
}

function funny() {
  for(var i = 0; i < 10; i++) {
    playAudio('Sounds/spider-man-2099.mp3');
    playAudio('Sounds/vine-boom.mp3');
    playAudio('Sounds/oh-my-god-vine.mp3');
    playAudio('Sounds/taco-bell-bong.mp3');
    playAudio('Sounds/baby-laughing-meme.mp3');
    playAudio('Sounds/clashroyalehehe.mp3');
    playAudio('Sounds/wompwompwomp.mp3');
    playAudio('Sounds/old-car-horn.mp3');
    }
}