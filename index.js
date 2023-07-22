const gridItems = document.querySelectorAll('.square');

gridItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = getRandomColor();
  });
  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '';
  })
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
