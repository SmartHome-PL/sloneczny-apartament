import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './components/check-in/check-in.component';
import { OswPageRoutingModule } from './osw-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { OswPageComponent } from './osw-page.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { DirectionsComponent } from './components/directions/directions.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { UnlockDialogComponent } from './components/unlock-dialog/unlock-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { PageBuilderComponent } from './components/page-builder/page-builder.component';

@NgModule({
  declarations: [
    CheckInComponent,
    OswPageComponent,
    DirectionsComponent,
    UnlockDialogComponent,
    AmenitiesComponent,
    PageBuilderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OswPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    TranslateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class OswPageModule {}
