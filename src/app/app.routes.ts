import {Routes} from '@angular/router';
import {SideNavComponent} from "./home/components";

export const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      }
    ],
  },
];
