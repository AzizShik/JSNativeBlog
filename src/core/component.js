export class Component {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.init();

    this.tabs = [];
  }

  init() {}

  onShow(){}
  onHide(){}

  registerTabs(tabs) {
    this.tabs = tabs;
  }

  hide() {
    this.$el.classList.add('hide');
    this.onHide();
  }

  show() {
    this.$el.classList.remove('hide');
    this.onShow();
  }
}