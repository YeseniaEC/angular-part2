import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { UsersComponent } from '../../components/users/users.component';
import { ProductsComponent } from '../../components/products/products.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { ProfileModule } from '../profile/profile.module';
import { GithubComponent } from '../../components/github/github.component';

// (colon between the routes is declaring the type in typescript)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  // { path: 'user/:id', loadChildren: '../profile/profile.module#ProfileModule' },
  { path: 'github', component: GithubComponent },
  // tslint:disable-next-line:max-line-length
  { path: 'user/:id', loadChildren: () => ProfileModule }, // line 18 and 20 are both the same they are just diff ways to access the child routes.
  { path: 'products', component: ProductsComponent},
  { path: '**' , component: NotFoundComponent } // MUST be the last route since it is a catch ALL
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
