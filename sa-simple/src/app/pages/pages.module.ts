import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OswPageModule } from './osw-page/osw-page.module';
import { HomepageModule } from './homepage/homepage.module';
import { LbnPageModule } from './lbn-page/lbn-page.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    OswPageModule,
    HomepageModule,
    LbnPageModule,
  ],
})
export class PagesModule {}
