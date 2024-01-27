import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OswPageComponent } from './osw-page.component';

const routes: Routes = [{ path: '', component: OswPageComponent }];

import jsonData from '../../../assets/data/osw-menu-items.json';
import { PageBuilderComponent } from './components/page-builder/page-builder.component';

jsonData.forEach((page: { path: any }) => {
  routes.push({ path: page.path, component: PageBuilderComponent });
});

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OswPageRoutingModule {}
