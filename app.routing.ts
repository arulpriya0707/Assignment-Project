import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { RestrictedAccessComponent } from './user/restricted-access/restricted-access.component';
import { NotSelectedComponent } from './user/not-selected/not-selected.component';
const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'id:/user_id', component: UserDetailComponent },
      { path: 'resctrictedAccess', component: RestrictedAccessComponent },
      { path: 'notSelected', component: NotSelectedComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
