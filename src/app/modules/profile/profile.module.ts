import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileRouterModule } from '../profile-router/profile-router.module';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
// tslint:disable-next-line:max-line-length
import { MatInputModule, MatTabsModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRouterModule,
    MatInputModule,
    MatTabsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHomeComponent,
    ProfileAboutComponent,
    ProfileContactComponent
  ]
})

export class ProfileModule { }
