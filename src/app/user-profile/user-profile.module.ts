import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { UserProfileComponent } from './user-profile.component';
import { PositionsComponent } from './positions/positions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsComponent, UserProfileComponent, PositionsComponent],
  exports: [DetailsComponent, UserProfileComponent, PositionsComponent]
})
export class UserProfileModule { }
