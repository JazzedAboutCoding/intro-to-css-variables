const colorBox = document.querySelector('.color-box');

colorBox.style.getPropertyValue('--x-pos');
colorBox.style.getPropertyValue('--y-pos');

// getComputedStyle(colorBox).getPropertyValue('--x-pos');
// getComputedStyle(colorBox).getPropertyValue('--y-pos');

console.log({
  x: colorBox.style.getPropertyValue('--x-pos'),
  y: colorBox.style.getPropertyValue('--y-pos'),
});

colorBox.style.setProperty('--x-pos', '100px');
colorBox.style.setProperty('--y-pos', '100px');

console.log({
  x: colorBox.style.getPropertyValue('--x-pos'),
  y: colorBox.style.getPropertyValue('--y-pos'),
});
