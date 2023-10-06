import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { PostdashboardComponent } from './shared/components/postdashboard/postdashboard.component';
import { AuthGuard } from './shared/components/auth.guard';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'post', component: PostdashboardComponent,
    canActivate: [ AuthGuard ]
  }
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
