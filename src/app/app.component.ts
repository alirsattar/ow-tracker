import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'OW SR Tracker';

  bobs: any = [
    {
      title: 'title 1',
      otherProp: 'other prop 1'
    },
    {
      title: 'title 2',
      otherProp: 'other prop 2'
    },
    {
      title: 'title 3',
      otherProp: 'other prop 3'
    }
  ];

  ngOnInit(){
    console.log(this.bobs);
  }

  ngOnChanges(){
    console.log('changed');
  }
}
