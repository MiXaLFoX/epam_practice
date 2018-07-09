
class Tooltip {
  constructor(element) {
    this.element = Array.from(element);
    this.toolTipElem = null;
    this.init();
  }
  init () {
    this.element.forEach(el => {
      el.addEventListener('mouseenter', (e) => this.showToolTip());
      el.addEventListener('mouseleave', (e) => this.hideToolTip());
    })
  }
  showToolTip (e) {
    e = event || window.event;
    const target = e.target;
    const tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) return;
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
    if (this.toolTipElem) {
      document.body.removeChild(this.toolTipElem);
      this.toolTipElem = null;
    }
  }
}

const tooltip = new Tooltip(document.querySelectorAll('li'));

