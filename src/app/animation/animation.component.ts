import { Component, OnInit, trigger, state, style } from '@angular/core';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('cognify', [
      state('go', style({
        'background-color':'green'
      })),
      state('stop', style({
        'background-color':'red',
        'border-radius':'10px'
      }))
    ])
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  count: number = 0;
  shade: string;
  constructor() { }

  ngOnInit() {
  }

  changeShade() {
    this.count++;
    console.log("changing the shade");
    this.shade = 'go';
    if ((this.count % 2) !== 0) {
      this.shade = 'stop';
    }
  }

}
