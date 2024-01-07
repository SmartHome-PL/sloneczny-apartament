import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './components/check-in/check-in.component';
import { OswPageRoutingModule } from './osw-page-routing.module';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule, OswPageRoutingModule],
})
export class OswPageModule {}
