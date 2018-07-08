
const showToolTip = (e) => {
  const target = e.target;
  const container = document.createElement('div');
  container.className = 'tooltip';
  container.innerHTML = target.innerText;
  document.body.appendChild(container);

  const coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - container.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - container.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  container.style.left = left + 'px';
  container.style.top = top + 'px';
};

const hideToolTip = () => {
    const container = document.querySelector('.tooltip');
    document.body.appendChild(container);
};

document.addEventListener('mouseover', showToolTip);
document.addEventListener('mouseout', hideToolTip);
