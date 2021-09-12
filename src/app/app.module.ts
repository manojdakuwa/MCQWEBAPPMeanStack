import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { SignupComponent } from './SignUp/signup/signup.component';
import {  NavBarComponent } from './Nav/nav-bar/nav-bar.component';
import { McqQuestComponent } from './Question/mcq-quest/mcq-quest.component';
import { AuthGuard } from './Guards/auth.guard';
import { AuthServices } from './Service/auth-services.service';
import { AppBackgroundDirective } from './app-background.directive';

export function getToken() {
  return sessionStorage.getItem('User');
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    McqQuestComponent,
    AppBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule
  ],
  providers: [AuthGuard,AuthServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
