import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ObjectListComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomepageModule {}
