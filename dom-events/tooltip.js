
class Tooltip {
  constructor(element) {
    this.element = element;
    this.toolTipElem = null;
    this.init();
  }
  init () {
    this.element.addEventListener('mouseenter', (e) => this.showToolTip(e));
    this.element.addEventListener('mouseleave', (e) => this.hideToolTip(e));
  }
  createToolTipContainer () {
    const container = document.createElement('div');
    container.className = 'tooltip';
    return container;
  }
  setCoords(tipElem){
    const container = tipElem;
    const coords = this.element.getBoundingClientRect();
    let left = coords.left;
    if (left < 0) {
      left = 0;
    }

    let top = coords.top - container.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + container.offsetHeight - 15;
    }

    container.style.left = left + 'px';
    container.style.top = top + 'px';
  }
  showToolTip (e) {
    const target = e.target;
    const tooltip = target.getAttribute('data-tooltip');
    const tooltipElem = this.createToolTipContainer();
    tooltipElem.innerHTML = tooltip;

    if (tooltip !== null) {
      document.body.appendChild(tooltipElem);
      this.setCoords(tooltipElem);
      this.toolTipElem = tooltipElem;
    }
  }
  hideToolTip (e) {
    if (this.toolTipElem) {
      document.body.removeChild(this.toolTipElem);
      this.toolTipElem = null;
    }
  }
}

const tooltips = Array.from(document.querySelectorAll('li')).forEach(el => {
  return new Tooltip(el);
});
const tooltip2 = new Tooltip(document.querySelector('p'));
