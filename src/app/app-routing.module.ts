import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard.guard';
import { AuthViewComponent } from './views/auth-view/auth-view/auth-view.component';
import { EditShowComponent } from './views/edit-show/edit-show/edit-show.component';
import { ErrorViewComponent } from './views/error-view/error-view/error-view.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { NewShowComponent } from './views/new-show/new-show/new-show.component';
import { SingleShowComponent } from './views/single-show/single-show/single-show.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: MainPageComponent },
  { path: 'home', canActivate: [AuthGuard], component: MainPageComponent },
  { path: 'show/new', canActivate: [AuthGuard], component: NewShowComponent },
  {
    path: 'show/:id',
    canActivate: [AuthGuard],
    component: SingleShowComponent,
  },
  {
    path: 'show/:id/edit',
    canActivate: [AuthGuard],
    component: EditShowComponent,
  },
  { path: 'auth', component: AuthViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
