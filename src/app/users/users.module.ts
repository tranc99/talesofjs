import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [UserComponent],
  exports: [ UserComponent ]
})
export class UserModule { }
