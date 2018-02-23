import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditComponent} from '../app/user-profile/edit/edit.component';
import {UserProfileComponent} from '../app/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent
  }, {
    path: '',
    pathMatch: 'full',
    component: UserProfileComponent
  }, {
    path: '*',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
