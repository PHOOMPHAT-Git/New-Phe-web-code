function closeNotification() {
  const notification = document.getElementById("notification");
  const message = notification.querySelector(".notification-message");

  notification.style.opacity = "0";
  
  message.style.opacity = "0";

  setTimeout(() => {
    notification.style.display = "none";
  }, 1000);
}

window.onload = function() {
  document.getElementById("loading-message").style.display = "block";
  startCountdown();
};

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

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = 'Play Music';
  } else {
    audio.play();
    playButton.textContent = 'Stop Music';
  }
  isPlaying = !isPlaying;
}

function closeNotification() {
  document.getElementById('notification').style.display = 'none';
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