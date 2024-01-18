import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridMenuComponent } from './components/grid-menu/grid-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [GridMenuComponent, InfoCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    TranslateModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [GridMenuComponent, InfoCardComponent],
})
export class SharedModule {}
