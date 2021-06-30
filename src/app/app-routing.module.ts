import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path: '' , redirectTo: '/menu', pathMatch: 'full'},
  
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'e404', component: E404Component},





  {path: 'user/list' , component: UserListComponent},
  {path: 'user/detail/:id' , component: UserDetailComponent},
  {path: 'user/create' , component: UserCreateComponent},
  {path: 'user/edit/:id' , component: UserEditComponent},
  {path: 'user' , redirectTo: 'user/list', pathMatch: 'full'},

  {path: 'vendor/list' , component: VendorListComponent},
  {path: 'vendor/detail/:id' , component: VendorDetailComponent},
  {path: 'vendor/create' , component: VendorCreateComponent},
  {path: 'vendor/edit/:id' , component: VendorEditComponent},
  {path: 'vendor' , redirectTo: 'vendor/list', pathMatch: 'full'},




  {path: '**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
