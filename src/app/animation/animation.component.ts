import { Component, OnInit, trigger, state, style } from '@angular/core';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('cognify', [
      state('go', style({
        'background-color':'green'
      }))
    ])
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  shade: string;
  constructor() { }

  ngOnInit() {
  }

  changeShade() {
    console.log("changing the shade");
  }

}
