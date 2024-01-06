import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectListComponent } from './components/object-list/object-list.component';

const routes: Routes = [{ path: 'objects', component: ObjectListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
