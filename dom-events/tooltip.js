
class Tooltip {
  constructor(element) {
    this.element = element;
    this.toolTipElem = null;
    this.setListeners();
  }

  setListeners () {
    this.element.addEventListener('mouseenter', () => this.show());
    this.element.addEventListener('mouseleave', () => this.hide());
  }

  createToolTipContainer () {
    const container = document.createElement('div');
    container.className = 'tooltip';
    return container;
  }

  setCoords(tipElemCoords){
    const targetElementCoords = this.element.getBoundingClientRect();
    let left = targetElementCoords.left < 0 ? 0 : targetElementCoords.left;

    let top = targetElementCoords.top - tipElemCoords.offsetHeight;
    if (top < 0) {
      const shiftTipDown = 15;
      top = targetElementCoords.top + tipElemCoords.offsetHeight - shiftTipDown;
    }

    tipElemCoords.style.left = left + 'px';
    tipElemCoords.style.top = top + 'px';
  }

  show () {
    if (this.element.hasAttribute('data-tooltip')) {
      const tooltipElem = this.createToolTipContainer();
      const tooltip = this.element.getAttribute('data-tooltip');
      tooltipElem.innerHTML = tooltip;
      document.body.appendChild(tooltipElem);
      this.setCoords(tooltipElem);
      this.toolTipElem = tooltipElem;
    }
  }

  hide () {
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
