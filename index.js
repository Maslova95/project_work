const blocksMajor = document.querySelectorAll(".major");
const blocksMinor = document.querySelectorAll(".minor");
const majorsText = document.querySelectorAll(".majorText");
const div = document.createElement("div");
const buttons = document.querySelectorAll(".button");
const pics = document.querySelectorAll(".headphones");
const buttonsMinor = document.querySelectorAll('.button-minor');
const picsMinor = document.querySelectorAll('.headphones-minor');
const promoPics = document.querySelectorAll('.main-pic');
const upButton = document.querySelector('.upper');
const buyMajorButton = document.querySelector('.buy-major');
const buyMinorButton = document.querySelector('.buy-minor');

promoPics.forEach((pic) => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    pic.style.transform = `translateY(-${scrollHeight * 0.4}px)`;
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");

    const color = btn.getAttribute("color");

    pics.forEach((pic) => {
      pic.classList.remove("active");
    });
    pics.forEach((it) => {
      if (it.getAttribute("color") === color) {
        it.classList.add("active");
      }
    });
  });
});

blocksMajor.forEach((block, index) => {
  block.addEventListener("mouseover", (event) => {
    block.style.height = "500px";
    if (index === 0) {
      div.innerHTML =
        "The middle timbres are quite natural, and due to the intersection with the lower register, the voices of the performers are filled with depth and emotional meaning. Instruments sound somewhat distorted, attacks and decays are simplified in speed for the sake of drive and color. Upper range. Comfort at the sacrifice of analytics. The main details are distinguishable, but if we are talking about overtones and small overtones.";
      block.appendChild(div);
    } else if (index === 1) {
      div.innerHTML =
        "Marshall Major IV also have TRS and you can listen music without changing your future headphones, or you can share your music with a friend. Previous models have no more than 35 hours of autonomy, which means you can charge your headphones rarely, and a casual user can charge them only a few times per year. And I think you can't find a better model these days.";
      block.appendChild(div);
    } else if (index === 2) {
      div.innerHTML =
        "You can buy any kind of wireless charger, for example, Samsung one, or if you have a charger for your phone, you can use it for your headphones too. But if you don't have it, you can buy a brand charger from Marshall, which also has fast charging. Here are 2 models: a small one, only for one device, and a big one with which you can charge your phone and headphones at the same time with fast-charging technology!";
      block.appendChild(div);
    }
  });
  block.addEventListener("mouseout", (event) => {
    block.style.height = "310px";
    div.remove();
  });
});

buttonsMinor.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttonsMinor.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");

    const color = btn.getAttribute("color");

    picsMinor.forEach((pic) => {
      pic.classList.remove("active");
    });
    picsMinor.forEach((it) => {
      if (it.getAttribute("color") === color) {
        it.classList.add("active");
      }
    });
  });
});

blocksMinor.forEach((block, index) => {
  block.addEventListener("mouseover", (event) => {
    block.style.height = "500px";
    if (index === 0) {
      div.innerHTML =
        "Minor III remembers up to 6 previously paired devices and will try to reconnect with the last connected device.<br>Place the earbuds in the case and keep the lid open.<br>Press and hold the button on the bottom of the case until the LED turns to a slow blue pulse.<br>Select MINOR III from your sound device Bluetooth list.<br>Note: Minor III can be connected with one sound device at a time. Make sure to disconnect from the current device before reconnecting with a different device.";
      block.appendChild(div);
    } else if (index === 1) {
      div.innerHTML =
        "<br>Touch the left or right earbud to control your music and phone calls.<br><br>1 touch to play/pause or receive/end a call<br>2 touches to skip forward or reject a call<br>3 touches to skip backward<br><br> Its intuitive main functions to control your device.";
      block.appendChild(div);
    } else if (index === 2) {
      div.innerHTML =
        "<br>It's one of the best results of autonomous compact headphones. But if these hours aren't enough for you, you always have the opportunity to charge your headphones from your phone with the reverse charging function, because Marshall Minor III has wireless charging feature. For compact headphones like Minor III, this autonomy result is one of the best on the market.";
      block.appendChild(div);
    }
  });
  block.addEventListener("mouseout", (event) => {
    block.style.height = "310px";
    div.remove();
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset === 0) {
    upButton.classList.remove('active');
  } else {
    upButton.classList.add('active');
  }
});

upButton.addEventListener('click', () => {
  upButton.classList.remove('active');
  window.scrollTo(0, 0);
});

buyMajorButton.addEventListener('click', () => {
  location.href = "https://ek.ua/ua/MARSHALL-MAJOR-IV.htm";
});

buyMinorButton.addEventListener('click', () => {
  location.href = "https://ek.ua/ua/MARSHALL-MINOR-III.htm";
});
