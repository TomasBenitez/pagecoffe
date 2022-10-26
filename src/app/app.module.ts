import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CafelatteComponent } from './compoentshijos/cafelatte/cafelatte.component';
import { CafeheladoComponent } from './compoentshijos/cafehelado/cafehelado.component';
import { FrapuccinoComponent } from './compoentshijos/frapuccino/frapuccino.component';
import { ComidaComponent } from './compoentshijos/comida/comida.component';


const appRoutes:Routes=[
  {path:'', component:NavbarComponent},
  {path:'menu',component:MenuComponent},
  {path:'sobre-nosotros', component:SobreNosotrosComponent},
 
  {path:'cafelatte',component:CafelatteComponent},
  {path:'cafehelado',component:CafeheladoComponent},
  {path:'frapuccino',component:FrapuccinoComponent},
  {path:'comida',component:ComidaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreNosotrosComponent,
 
    NavbarComponent,
    CafelatteComponent,
    CafeheladoComponent,
    FrapuccinoComponent,
    ComidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
