import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaComponent } from './andalucia/andalucia.component';
import { CastillaLeonComponent } from './castilla-leon/castilla-leon.component';
import { CastillaLeonModule } from './castilla-leon/castilla-leon.module';
import { ExtremaduraComponent } from './extremadura/extremadura.component';

const routes: Routes = [
  {
    path: 'andalucia',
    component: AndaluciaComponent,
    loadChildren: () => import('./andalucia/andalucia.module').then(m => m.AndaluciaModule)
  },
  {
    path: 'castilla-leon',
    component: CastillaLeonComponent,
    loadChildren: () => import('./castilla-leon/castilla-leon.module').then(m => m.CastillaLeonModule)
  },
  {
    path: 'extremadura',
    component: ExtremaduraComponent,
    loadChildren: () => import('./andalucia/andalucia.module').then(m => m.AndaluciaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
