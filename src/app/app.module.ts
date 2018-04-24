import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

const appRoutes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    data: { title: 'menu List' }
  },
  {
    path: 'menu-details/:id',
    component: MenuDetailComponent,
    data: { title: 'menu Details' }
  },
  {
    path: 'menu-create',
    component: MenuCreateComponent,
    data: { title: 'Create menu' }
  },
  {
    path: 'items-edit/:id',
    component: MenuEditComponent,
    data: { title: 'Edit menu' }
  },
  { path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDetailComponent,
    MenuCreateComponent,
    MenuEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
