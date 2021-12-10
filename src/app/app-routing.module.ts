import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './home/guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:"full"},
  { path: 'home', /*canActivate: [AuthenticationGuard],*/ loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'github', loadChildren: () => import('./github/github.module').then(m => m.GithubModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
