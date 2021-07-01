import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

import { RequestLinesComponent } from './requestline/request-lines/request-lines.component';

import { RequestlinesDetailComponent } from './requestline/requestlines-detail/requestlines-detail.component';
import { RequestlinesEditComponent } from './requestline/requestlines-edit/requestlines-edit.component';
import { RequestlinesCreateComponent } from './requestline/requestlines-create/requestlines-create.component';

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

  {path: 'product/list' , component: ProductListComponent},
  {path: 'product/detail/:id' , component: ProductDetailComponent},
  {path: 'product/create' , component: ProductCreateComponent},
  {path: 'product/edit/:id' , component: ProductEditComponent},
  {path: 'product' , redirectTo: 'product/list', pathMatch: 'full'},


  {path: 'request/list' , component: RequestListComponent},
  {path: 'request/detail/:id' , component: RequestDetailComponent},
  {path: 'request/create' , component: RequestCreateComponent},
  {path: 'request/edit/:id' , component: RequestEditComponent},
  {path: 'request' , redirectTo: 'request/list', pathMatch: 'full'},


 
  {path: 'request/lines/:id' , component: RequestLinesComponent},
  {path: 'requestlines/detail/:id' , component: RequestlinesDetailComponent},
  {path: 'requestlines/create/:id' , component: RequestlinesCreateComponent},
  {path: 'requestlines/edit/:id' , component: RequestlinesEditComponent},

  {path: '**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
