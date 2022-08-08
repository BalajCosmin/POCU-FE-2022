const randomFloat = function () {
  const int = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return int / 2 ** 32;
};

const randomInt = function (min, max) {
  const range = max - min;
  return Math.floor(randomFloat() * range + min);
};

function secureRandomNums(length, min, max) {
  return new Array(length).fill(0).map(() => randomInt(min, max));
}

function getRandomNumbers() {
  const form = document.forms[0];
  let elements = form.querySelectorAll('input[name="number[]"]');
  let nums = secureRandomNums(elements.length, 0, 9);
  for (let i = 0; i < nums.length; i++) {
    elements[i].value = nums[i];
  }
}

function printNumbers() {
  const intervalID = setInterval(getRandomNumbers, 200);
  setTimeout(() => {
    clearInterval(intervalID);
  }, 5000);
}
