import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ObjectListComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomepageModule {}
