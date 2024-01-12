import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridMenuComponent } from './components/grid-menu/grid-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [GridMenuComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatGridListModule],
  exports: [GridMenuComponent],
})
export class SharedModule {}
