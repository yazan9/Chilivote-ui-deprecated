import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewChilivoteComponent } from './new-chilivote/new-chilivote.component';
import { LoginComponent } from './auth/login/login.component';
import { MyChilivotesComponent } from './components/my-chilivotes/my-chilivotes.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'new-chilivote', component: NewChilivoteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mychilivotes', component: MyChilivotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
