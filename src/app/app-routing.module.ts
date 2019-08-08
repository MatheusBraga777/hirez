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
  {
    path: 'Assassino',
    loadChildren: './Assassino/Assassino.module#AssassinoPageModule'
  },
  {
    path: 'Guardião',
    loadChildren: './Guardião/Guardião.module#GuardiãoPageModule'
  },
  {
    path: 'Guerreiro',
    loadChildren: './Guerreiro/Guerreiro.module#GuerreiroPageModule'
  },
  {
    path: 'Cacador',
    loadChildren: './Cacador/Cacador.module#CacadorPageModule'
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
