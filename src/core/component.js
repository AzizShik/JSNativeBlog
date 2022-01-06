export class Component {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.init();

    this.tabs = [];
  }

  init() {}

  registerTabs(tabs) {
    this.tabs = tabs;
  }

  hide() {
    this.$el.classList.add('hide');
  }

  show() {
    this.$el.classList.remove('hide');
  }
}