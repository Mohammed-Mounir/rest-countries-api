import { Routes } from '@angular/router';
import { ListComponent } from './countries/list/list.component';
import { DetailsComponent } from './countries/details/details.component';

export const routes: Routes = [
  { path: '', title: 'Countries', component: ListComponent },
  { path: 'details/:country', title: 'Country', component: DetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
