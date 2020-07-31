const HEADER_CONTAINER = getId('headerContainer');
  POWER_BUTTON = getId('powerBtn'),
  TV_BUTTONS = getSelector('.tv-btn');

HEADER_CONTAINER.style.height = window.innerHeight + 'px';

function getId(tagID) {
  return document.getElementById(tagID);
}

function getSelector(selector) {
  return document.querySelectorAll(selector);
}

POWER_BUTTON.addEventListener('click', () => {
  // HEADER_CONTAINER.style.transform = "skewX(90deg)";
  HEADER_CONTAINER.style.height = "0px";
  HEADER_CONTAINER.style.transform = "translateY(-50%)";
  HEADER_CONTAINER.style.transition = "all 3s";
});

for (let i = 0; i < TV_BUTTONS.length; i++) {
  TV_BUTTONS[i].addEventListener('click', () => {
    alert('sound and glitched overlay');
  });
}
