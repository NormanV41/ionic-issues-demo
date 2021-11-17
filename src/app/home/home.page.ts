import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public input = '';

  public date = '2021-11-02';

  constructor() {}

  public ngOnInit() {
    setTimeout(() => {
      this.date = '2021-11-05';
      this.input = 'new value';
    }, 10000);
  }
}
