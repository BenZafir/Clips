import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ManageComponent } from './views/manage/manage.component';
import { UploadComponent } from './views/upload/upload.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
    data: {
      authOnly: true,
    },
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: {
      authOnly: true,
    },
  },
];
