
let toolTipElem;

const showToolTip = (e) => {
  const target = e.target;
  const tooltip = target.getAttribute('data-tooltip');
  const container = document.createElement('div');
  container.className = 'tooltip';
  container.innerHTML = tooltip || 'no tooltip for this element';
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

  toolTipElem = container;
};

const hideToolTip = (e) => {
  document.body.removeChild(toolTipElem);
};

document.addEventListener('mouseover', showToolTip);
document.addEventListener('mouseout', hideToolTip);
