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
  },
  {path: 'tyra',
  loadChildren: './tyra/tyra.module#tyraPageModule'
},
{
  path: 'Chronos',
  loadChildren: './Chronos/Chronos.module#ChronosPageModule'
},
{
  path: 'Hades',
  loadChildren: './Hades/Hades.module#HadesPageModule'
},
{
  path: 'Poseidon',
  loadChildren: './Poseidon/Poseidon.module#PoseidonPageModule'
},
{
  path: 'Zeus',
  loadChildren: './Zeus/Zeus.module#ZeusPageModule'
},
{
  path: 'Arachne',
  loadChildren: './Arachne/Arachne.module#ArachnePageModule'
},
{
  path: 'Loki',
  loadChildren: './Loki/Loki.module#LokiPageModule'
},
{
  path: 'Fenrir',
  loadChildren: './Fenrir/Fenrir.module#FenrirPageModule'
},
{
  path: 'Thor',
  loadChildren: './Thor/Thor.module#ThorPageModule'
},
{
  path: 'Athena',
  loadChildren: './Athena/Athena.module#AthenaPageModule'
},
{
  path: 'Cerberus',
  loadChildren: './Cerberus/Cerberus.module#CerberusPageModule'
},
{
  path: 'Ganesha',
  loadChildren: './Ganesha/Ganesha.module#GaneshaPageModule'
},
{
  path: 'Ymir',
  loadChildren: './Ymir/Ymir.module#YmirPageModule'
},
{
  path: 'Achilles',
  loadChildren: './Achilles/Achilles.module#AchillesPageModule'
},
{
  path: 'Bellona',
  loadChildren: './Bellona/Bellona.module#BellonaPageModule'
},

];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
