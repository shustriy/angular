import { Routes, RouterModule } from '@angular/router';
import ComponentAux from './component-aux';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-aux', component: ComponentAux, outlet: 'sidebar'}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);