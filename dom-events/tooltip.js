
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
    const tooltip = this.element.getAttribute('data-tooltip');
    const container = document.createElement('div');
    container.className = 'tooltip';
    container.innerHTML = tooltip;
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
  showToolTip () {
    this.createToolTipContainer ();
    const tooltip = this.createToolTipContainer();
    document.body.appendChild(tooltip);

    if (tooltip) {
      this.setCoords(tooltip);
      this.toolTipElem = tooltip;
    }
  }
  hideToolTip () {
    if (this.toolTipElem) {
      document.body.removeChild(this.toolTipElem);
      this.toolTipElem = null;
    }
  }
}

const tooltips = Array.from(document.querySelectorAll('li')).forEach(el => {
  return new Tooltip(el);
});
