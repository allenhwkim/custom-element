import {HTMLCustomElement} from 'html-custom-element';

import * as template from './oneview-footer.html';
import * as css from './oneview-footer.scss';

//import arrowUpPng from './arrow_up.png';

// private functions
function bodyClickHandler(event) {
  this.extendSession();
}

function runTimerOn() {
  const self = this;
  const timer = setInterval(_ => {
    const timerEl = this.querySelector('.session .remaining-time');
    if (this.timeLeft) {
      this.timeLeft--;
      timerEl.innerHTML = "Time out in: " + Math.floor(self.timeLeft / 60) + ':' + (this.timeLeft % 60);
    } else {
      this.logout();
    }
  }, 1000);
  return timer;
}



export class OneviewFooter extends HTMLCustomElement {
  i18n: any;
  agent: any;
  timer: any;
  timeLeft: number;
  sessionDuration: number;
  otherLang: string;
  

  connectedCallback() {
    this.template = template;
    this.css = css;
    super.render().then(_ => {
      this.extendSession();
      document.body.addEventListener('click', this.extendSession.bind(this));
      this.querySelector('#other-language').innerHTML = 
        this.otherLang === 'en' ? 'English' : 'Francais';
    });
  }

  logout(event: Event) {
    event.target.dispatchEvent(new CustomEvent('logout', {bubbles: true}));
  }  

  deepLink(event: Event) {
    event.target.dispatchEvent(new CustomEvent('deeplink', {
      bubbles: true, 
      detail: event.target.getAttribute('href')
    }));
    event.preventDefault();
  }

  extendSession(event? : Event) {
    this.timer && clearTimeout(this.timer);
    this.timeLeft = (this.sessionDuration || 15) * 60;
    this.timer = runTimerOn.bind(this)();
  }

  toggleQuickLinks(event) {
    this.querySelector('.quick-links').classList.toggle('visible');
  }
}

OneviewFooter.define('oneview-footer',  OneviewFooter);
