
class Tooltip {
  constructor(element) {
    this.element = element;
    this.toolTipElem = null;
    this.setListeners();
  }
  setListeners () {
    this.element.addEventListener('mouseenter', (e) => this.show(e));
    this.element.addEventListener('mouseleave', (e) => this.hide(e));
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
  show (e) {
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
  hide (e) {
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
