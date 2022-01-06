import {
  Component
} from "../core/component";

export class NavigationComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this));
  }
}

function tabClickHandler(e) {
  if (e.target.classList.contains('tab')) {
    e.preventDefault();
    const tabs = this.$el.querySelectorAll('.tab');
    tabs.forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    const activeTab = this.tabs.find(tab => tab.name === e.target.dataset.name);
    this.tabs.forEach(tab => tab.component.hide());
    activeTab.component.show();
  }
}