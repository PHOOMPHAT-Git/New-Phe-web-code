const musicList = [
  { url: "https://raw.githubusercontent.com/PHOOMPHAT-GIT/New-Phe-web-code/refs/heads/main/spotifydown.com%20-%20Goodbye.mp3", name: "Goodbye" },
  { url: "https://raw.githubusercontent.com/PHOOMPHAT-GIT/New-Phe-web-code/refs/heads/main/spotifydown.com%20-%20In%20My%20Head.mp3", name: "In My Head" },
  { url: "https://raw.githubusercontent.com/PHOOMPHAT-GIT/New-Phe-web-code/refs/heads/main/spotifydown.com%20-%20Spend%20It.mp3", name: "Spend It" },
  { url: "https://raw.githubusercontent.com/PHOOMPHAT-GIT/New-Phe-web-code/refs/heads/main/spotifydown.com%20-%20Party%20By%20Myself.mp3", name: "Party By Myself" },
  { url: "https://raw.githubusercontent.com/PHOOMPHAT-GIT/New-Phe-web-code/refs/heads/main/spotifydown.com%20-%20Best%20Friend%20(with%20Fall%20Out%20Boy).mp3", name: "Best Friend" }
];

function startCountdown() {
  const targetDate = new Date('December 6, 2024 19:30:00').getTime();

  const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + " d " + hours + " h " + minutes + " m " + seconds + " s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "[ Live Now ! ]";
    }
    
    if (distance < targetDate) {
        document.getElementById("loading-message").style.display = "none";
    }
  },  1000);
}

let isPlaying = false;
const audio = document.getElementById('music');
const playButton = document.getElementById('playButton');

let currentSongIndex = 0;

window.onload = function() {
  document.getElementById("loading-message").style.display = "block";
  startCountdown();

  const audio = document.getElementById('music');
  audio.src = musicList[currentSongIndex].url;

  document.getElementById("trackTitle").textContent = "Name song : " + musicList[currentSongIndex].name;
};

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % musicList.length;
  const audio = document.getElementById('music');
  audio.src = musicList[currentSongIndex].url;
  playButton.textContent = "Play";
  document.getElementById("trackTitle").textContent = "Name song : " + musicList[currentSongIndex].name;
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + musicList.length) % musicList.length;
  const audio = document.getElementById('music');
  audio.src = musicList[currentSongIndex].url;
  playButton.textContent = "Play";
  document.getElementById("trackTitle").textContent = "Name song : " + musicList[currentSongIndex].name;
}

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause";
    graduallyIncreaseVolume();
  } else {
    playButton.textContent = "Play";
    graduallyDecreaseVolume();
  }
}

function graduallyIncreaseVolume() {
  let volume = 0;
  audio.volume = volume;
  const interval = setInterval(() => {
    if (volume < 0.5) {
      volume += 0.05;
      audio.volume = volume;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

function graduallyDecreaseVolume() {
  let volume = audio.volume;
  const interval = setInterval(() => {
    if (volume > 0.5) {
      volume -= 0.05;
      audio.volume = volume;
    } else {
      clearInterval(interval);
      audio.pause();
    }
  }, 50);
}

function closeNotification() {
  const notification = document.getElementById("notification");
  
  notification.style.transition = "opacity 1s ease";
  notification.style.opacity = "0";

  setTimeout(() => {
    notification.style.display = "none";
  }, 1000);
}

const modal = document.getElementById("myModal");
const hiddenImages = document.querySelectorAll(".hidden-image");
    
hiddenImages.forEach(image => {
  image.addEventListener("click", function() {
    const name = this.dataset.name;
    const title = this.dataset.title;
    const discord = this.dataset.discord;
    const facebook = this.dataset.facebook;
    const tiktok = this.dataset.tiktok;
    const youtube = this.dataset.youtube;

    document.getElementById("modal-title").textContent = name || "No Name";
    document.getElementById("modal-content").textContent = title || "No Title";

    const discordLink = document.getElementById("modal-discord");
    if (discord) {
       discordLink.style.display = "inline-block";
      discordLink.href = discord;
    } else {
      discordLink.style.display = "none";
    }

    const facebookLink = document.getElementById("modal-facebook");
    if (facebook) {
      facebookLink.style.display = "inline-block";
      facebookLink.href = facebook;
    } else {
      facebookLink.style.display = "none";
    }

    const tiktokLink = document.getElementById("modal-tiktok");
    if (tiktok) {
      tiktokLink.style.display = "inline-block";
      tiktokLink.href = tiktok;
    } else {
       tiktokLink.style.display = "none";
    }

    const youtubeLink = document.getElementById("modal-youtube");
    if (youtube) {
      youtubeLink.style.display = "inline-block";
      youtubeLink.href = youtube;
    } else {
      youtubeLink.style.display = "none";
    }
    modal.classList.add("show");
  });
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.classList.add("fadeOut");
      setTimeout(() => {
        modal.classList.remove("show", "fadeOut");
      }, 500);
    }
  });
  
  document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    
        document.addEventListener('mousedown', function(e) {
            if (e.button === 0) {
                e.preventDefault();
            }
        });
    
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                openCustomNotification();
            }
        });
  
        let messageIndex = 0;
        let isCooldown = false;
    
        function openCustomNotification() {
            if (isCooldown) return;
    
            const messages = [
                'ทำไรอ่ะ',
                'อย่าแม้แต่จะคิด',
                'ก็อปโค้ดระวังโดนเล่นนะ',
                'ยังไม่หยุดอีก',
                'จะหยุดยัง',
                'ระวังไว้ให้ดีละกัน',
                'ระบบได้ส่งที่อยู่ของคุณไปยังเจ้าของเว็ปแล้ว'
            ];
    
            const message = messages[messageIndex];
                
            const notification = document.createElement('div');
            notification.innerText = message;
            notification.style.position = 'fixed';
            notification.style.top = '25px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.backgroundColor = '#ff3b00';
            notification.style.color = 'white';
            notification.style.padding = '10px 20px';
            notification.style.borderRadius = '5px';
            notification.style.fontSize = '18px';
            notification.style.zIndex = '1000';
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 1s ease';
            document.body.appendChild(notification);
    
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 10);
    
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }, 2000);
    
            messageIndex = (messageIndex + 1) % messages.length;
    
            isCooldown = true;
            setTimeout(() => {
                isCooldown = false;
            }, 3000);
        }
    
        document.addEventListener('click', (event) => {
            const circle = document.createElement('div');
            circle.className = 'circle';
            document.body.appendChild(circle);
            const size = Math.random() * 50 + 50;
            circle.style.width = size + 'px';
            circle.style.height = size + 'px';
            circle.style.left = event.pageX - size / 2 + 'px';
            circle.style.top = event.pageY - size / 2 + 'px';
            setTimeout(() => {
                circle.remove();
            }, 500);
        });
    
        function createsquare() {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.left = Math.random() * 100 + 'vw';
    
            document.body.appendChild(square);
    
            setTimeout(() => {
                square.remove();
            }, 4000);
        }
    
    setInterval(createsquare, 250);
