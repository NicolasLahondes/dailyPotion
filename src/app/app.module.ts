import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { TableShowsLineComponent } from './components/table-shows-line/table-shows-line.component';
import { TableShowsComponent } from './components/table-shows/table-shows.component';
import { AuthService } from './services/auth/auth.service';
import { ShowsService } from './services/shows/shows.service';
import { AuthViewComponent } from './views/auth-view/auth-view/auth-view.component';
import { EditShowComponent } from './views/edit-show/edit-show/edit-show.component';
import { ErrorViewComponent } from './views/error-view/error-view/error-view.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { SingleShowComponent } from './views/single-show/single-show/single-show.component';
import { NewShowComponent } from './views/new-show/new-show/new-show.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { HeaderComponent } from './components/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TableShowsComponent,
    TableShowsLineComponent,
    AuthViewComponent,
    ErrorsFormComponent,
    ErrorViewComponent,
    SingleShowComponent,
    EditShowComponent,
    ErrorsFormComponent,
    ShowFormComponent,
    NewShowComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShowsService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
