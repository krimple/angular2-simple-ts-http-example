import {Component} from 'angular2/core';
import {BlogRoll} from './blog/blogroll';

@Component({
  template: `
   {{ message }}
   <blog-roll></blog-roll>
  `,
  selector: 'app',
  directives: [BlogRoll]
})
export class App {
  message: String;
  constructor() {
    this.message = 'Hi there!';
  }
}