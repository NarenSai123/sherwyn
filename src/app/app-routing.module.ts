import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersCComponent } from './careers-c/careers-c.component';
import { ContactUsCComponent } from './contact-us-c/contact-us-c.component';
import { DivisionsCComponent } from './divisions-c/divisions-c.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhoWeAreCComponent } from './who-we-are-c/who-we-are-c.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent 
  },
  { 
    path: 'landing', 
    component: HomePageComponent 
  },
  {
    path:'whoWeAre',
    component: WhoWeAreCComponent
  },
  {
    path:'divisions',
    component: DivisionsCComponent
  },
  {
    path:'careers',
    component: CareersCComponent
  },
  {
    path:'contactUs',
    component: ContactUsCComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
