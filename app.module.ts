import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListItemComponent } from './user/user-list-item/user-list-item.component';
import { NotSelectedComponent } from './user/not-selected/not-selected.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { RestrictedAccessComponent } from './user/restricted-access/restricted-access.component';
import { IncreamentComponent } from './subject/increament/increament.component';
import { DecreamentComponent } from './subject/decreament/decreament.component';
import { DisplayComponent } from './subject/display/display.component';
import { UserService } from "./user/user-list/user.service";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SubjectComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
    NotSelectedComponent,
    RestrictedAccessComponent,
    IncreamentComponent,
    DecreamentComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
