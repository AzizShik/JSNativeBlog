import {
  Component
} from '../core/component';

export class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    if(localStorage.getItem('visited')) {
      this.hide();
    }
    const btn = this.$el.querySelector('.get-started');
    btn.addEventListener('click', buttonHandler.bind(this));
  }
}

function buttonHandler() {
  localStorage.setItem('visited', true);
  this.$el.classList.add('hide');
}