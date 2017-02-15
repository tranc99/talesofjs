import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserModule } from './users/users.module';
import { UserComponent } from './users/user.component';
import { BeerComponent } from './beer/beer.component';
import { EmailComponent } from './email/email.component';
import { SettingsComponent } from './settings/settings.component';
import { SocialComponent } from './social/social.component';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';

// Set up our routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'social', component: SocialComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'animation', component: AnimationComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    EmailComponent,
    HomeComponent,
    SettingsComponent,
    EmailComponent,
    SettingsComponent,
    SocialComponent,
    HomeComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
