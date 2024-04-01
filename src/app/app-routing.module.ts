import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlInjectionPageComponent } from './sql-injection-page/sql-injection-page.component';
import { HomeComponent } from './home/home.component';
import { OfflinePasswordAttackComponent } from './offline-password-attack/offline-password-attack.component';
import { OnlinePasswordAttackComponent } from './online-password-attack/online-password-attack.component';
import { XssComponent } from './xss/xss.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección a /home
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'sql-injection', component: SqlInjectionPageComponent }, 
  { path: 'xss', component: XssComponent },
  { path: 'onlinePasswordAttack', component: OnlinePasswordAttackComponent },
  { path: 'offlinePasswordAttack', component: OfflinePasswordAttackComponent },
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
