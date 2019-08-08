import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'Campeões',
    loadChildren: './Campeões/Campeões.module#CampeõesPageModule'
  },
  {
    path: 'classes',
    loadChildren: './classes/classes.module#classesPageModule'
  },
  {
    path: 'Mago',
    loadChildren: './Mago/Mago.module#MagoPageModule'
  },
  {path: 'CampeõesResumo',
  loadChildren: './CampeõesResumo/CampeõesResumo.module#CampeõesResumoPageModule'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
