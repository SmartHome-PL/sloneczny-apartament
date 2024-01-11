import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './components/check-in/check-in.component';
import { OswPageRoutingModule } from './osw-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { OswPageComponent } from './osw-page.component';

@NgModule({
  declarations: [CheckInComponent, OswPageComponent],
  imports: [
    CommonModule,
    OswPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class OswPageModule {}
