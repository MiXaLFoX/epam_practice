
class Tooltip {
  constructor(element) {
    this.element = element;
    this.toolTipElem = null;
    this.init();
  }
  init () {
    this.element.addEventListener('mouseenter', () => this.showToolTip());
    this.element.addEventListener('mouseleave', () => this.hideToolTip());
  }
  createToolTipContainer () {
    const tooltip = this.element.getAttribute('data-tooltip');
    const container = document.createElement('div');
    container.className = 'tooltip';
    container.innerHTML = tooltip;
    return container;
  }
  showToolTip () {
    this.createToolTipContainer ();
    const tooltip = this.createToolTipContainer();
    document.body.appendChild(tooltip);

    this.setCoords(container);
    this.toolTipElem = container;
  }

  setCoords(tipElem){
    const container = tipElem;
    const target = this.element;
    const coords = target.getBoundingClientRect();
    let left = coords.left;
    if (left < 0) {
      left = 0;
    }

    let top = coords.top - container.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + target.offsetHeight + 5;
    }

    container.style.left = left + 'px';
    container.style.top = top + 'px';
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
