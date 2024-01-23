import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponent } from './components/check-in/check-in.component';
import { OswPageComponent } from './osw-page.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';

const routes: Routes = [
  { path: '', component: OswPageComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'amenities', component: AmenitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OswPageRoutingModule {}
