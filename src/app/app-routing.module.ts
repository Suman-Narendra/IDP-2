import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { DescriptionComponent } from './description/description.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
    
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: '**',
    component: ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
