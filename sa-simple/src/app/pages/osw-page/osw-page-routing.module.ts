import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponent } from './components/check-in/check-in.component';
import { OswPageComponent } from './osw-page.component';

const routes: Routes = [
  { path: '', component: OswPageComponent },
  { path: 'check-in', component: CheckInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OswPageRoutingModule {}
