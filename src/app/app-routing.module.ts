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
  {path: 'cassie',
  loadChildren: './cassie/cassie.module#cassiePageModule'
},
{ path: 'drogoz',
  loadChildren: './drogoz/drogoz.module#drogozPageModule'
},
{ path: 'lian',
  loadChildren: './lian/lian.module#lianPageModule'
},
{ path: 'evie',
  loadChildren: './evie/evie.module#eviePageModule'
},
{ path: 'maeve',
  loadChildren: './maeve/maeve.module#maevePageModule'
},
{ path: 'skye',
  loadChildren: './skye/skye.module#skyePageModule'
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
{
  path: 'ReiArthur',
  loadChildren: './ReiArthur/ReiArthur.module#ReiArthurPageModule'
},
{
  path: 'Odin',
  loadChildren: './Odin/Odin.module#OdinPageModule'
},
{
  path: 'Apollo',
  loadChildren: './Apollo/Apollo.module#ApolloPageModule'
},
{
  path: 'Artemis',
  loadChildren: './Artemis/Artemis.module#ArtemisPageModule'
},
{
  path: 'Izanami',
  loadChildren: './Izanami/Izanami.module#IzanamiPageModule'
},
{
  path: 'Xbalanque',
  loadChildren: './Xbalanque/Xbalanque.module#XbalanquePageModule'
},

];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
