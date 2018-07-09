
class Tooltip {
  constructor(element) {
    this.element = element;
    this.toolTipElem = null;
  }
  init () {
    this.element.addEventListener('mouseover', (e) => this.showToolTip());
    this.element.addEventListener('mouseout', (e) => this.hideToolTip());
  }
  showToolTip (e) {
    e = event || window.event;
    const target = e.target;
    const tooltip = target.getAttribute('data-tooltip');
    const container = document.createElement('div');
    container.className = 'tooltip';
    container.innerHTML = tooltip;
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

    this.toolTipElem = container;
  }
  hideToolTip (e) {
    document.body.removeChild(this.toolTipElem);
  }
}

const tooltip = new Tooltip(document.querySelector('ul'));
tooltip.init();
