import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputfields',
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.css']
})

export class InputfieldsComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() otherProp: string;

  ngOnInit() {
    console.log(this.title);
  }

}
