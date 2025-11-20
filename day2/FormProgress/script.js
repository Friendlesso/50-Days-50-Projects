const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

const inputBoxOne = document.getElementById('input-one');
const inputBoxTwo = document.getElementById('input-two');

let currentActive = 1;
class User {
  constructor() {
    this.email = '';
    this.password = '';
  }
}

const user = new User();

nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  user.email = inputBoxOne.value;
  console.log("saved Email,", user.email);

  user.password = inputBoxTwo.value;
  console.log(user.password);

  console.log(user);

  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    };
  });

  const actives = document.querySelectorAll('.active');

  console.log((actives.length - 1) / (circles.length - 1) * 100 + '%')

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
