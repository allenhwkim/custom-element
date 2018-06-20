import {HTMLCustomElement} from 'html-custom-element';

import * as template from './oneview-header.html';
import * as css from './oneview-header.scss';

export class OneviewHeader extends HTMLCustomElement {

  connectedCallback() {
    this.template = template;
    this.css = css;
    super.render().then(_ => {
      // TODO
    });
  }
}

OneviewHeader.define('oneview-header',  OneviewHeader);
