import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-list',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),

  },
];
