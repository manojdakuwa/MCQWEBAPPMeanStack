import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { McqQuestComponent } from './Question/mcq-quest/mcq-quest.component';
import { SignupComponent } from './SignUp/signup/signup.component';

const routes: Routes = [
  { path: '', component: SignupComponent},
  {path:'Login', component:SignupComponent},
  {path:'mcq-dashboard',canActivate:[AuthGuard], component:McqQuestComponent},
  {path:'***', redirectTo:'Login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
