import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { UserProfileComponent } from './user-profile.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsComponent, UserProfileComponent, LocationsComponent],
  exports: [DetailsComponent, UserProfileComponent, LocationsComponent]
})
export class UserProfileModule { }
