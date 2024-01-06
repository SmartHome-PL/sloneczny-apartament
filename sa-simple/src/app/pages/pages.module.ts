import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceOswModule } from './place-osw/place-osw.module';
import { MainModule } from './main/main.module';
import { PlaceLbnModule } from './place-lbn/place-lbn.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PlaceOswModule,
    MainModule,
    PlaceLbnModule,
  ],
})
export class PagesModule {}
