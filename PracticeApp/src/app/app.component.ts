import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
  `
})

export class AppComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Hello World'
  }

}

