import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatGridListModule,MatIconModule,MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { IngresosComponent } from './home/ingresos/ingresos.component';
import { FacturaventasComponent } from './home/ingresos/facturaventas/facturaventas.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { PagosrecibidosComponent } from './home/ingresos/pagosrecibidos/pagosrecibidos.component';
import { CotizacionesComponent } from './home/ingresos/cotizaciones/cotizaciones.component';
import { GastosComponent } from './home/gastos/gastos.component';
import { PagosComponent } from './home/gastos/pagos/pagos.component';
import { FacturaproveedoresComponent } from './home/gastos/facturaproveedores/facturaproveedores.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard],children:[
    { path: 'ingresos', component: IngresosComponent},
    { path: 'principal', component: PrincipalComponent, pathMatch: 'full'},
    { path: 'facturaV', component: FacturaventasComponent},
    { path: 'pagosR', component: PagosrecibidosComponent},
    { path: 'cotiza', component: CotizacionesComponent},
    { path: 'facturaP', component: FacturaproveedoresComponent},
    { path: 'pagos', component: PagosComponent}
  ] },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    IngresosComponent,
    FacturaventasComponent,
    PrincipalComponent,
    PagosrecibidosComponent,
    CotizacionesComponent,
    GastosComponent,
    PagosComponent,
    FacturaproveedoresComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
