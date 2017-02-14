import { Component } from '@angular/core';
import { Inject } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class UserComponent {
  title: string;
  greeting: any;
  author = "Tendai Mutunhire";
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    console.log("user component says hello");
    console.log(this.userService.getHi());
    this.greeting = this.userService.getHi();
  }
}
