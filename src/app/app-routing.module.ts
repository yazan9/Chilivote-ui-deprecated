import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewChilivoteComponent } from './new-chilivote/new-chilivote.component';
import { LoginComponent } from './auth/login/login.component';
import { MyChilivotesComponent } from './components/my-chilivotes/my-chilivotes.component';
import {AuthGuard} from './auth/auth.guard';
import { FbLoginComponent } from './fb-login/fb-login.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'new-chilivote', component: NewChilivoteComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'mychilivotes', component: MyChilivotesComponent, canActivate: [AuthGuard]},
  //{path: 'login', component: FbLoginComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
