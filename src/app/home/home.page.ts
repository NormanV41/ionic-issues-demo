import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  platforms = '';
  primaryPointerResult = '';
  anyPointerResult = '';

  constructor(platform: Platform, @Inject(DOCUMENT) document: Document) {
    const window = document.defaultView;
    this.platforms = JSON.stringify(platform.platforms());
    this.primaryPointerResult = window.matchMedia('(pointer: coarse)').matches
      ? 'The primary input mechanism includes a pointing device of limited accuracy, for example it is using touch as primary input device'
      : 'The primary input mechanism does not includes a pointing device of limited accuracy' +
        ', for example, touch is not the primary input device';
    this.anyPointerResult = window.matchMedia('(any-pointer: coarse)').matches
      ? 'At least one input mechanism includes a pointing device of limited accuracy, for example, touch is available'
      : 'does not have at least one input mechanism includes a pointing device of limited accuracy, for example, touch is not available';
  }
}
