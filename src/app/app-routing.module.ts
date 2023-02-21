import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { ShowComponent } from './components/show/show.component';
import { LoginComponent } from './contact/login/login.component';
import { RegistrerComponent } from './contact/registrer/registrer.component';

const routes: Routes = [
  {path : "",component:ShowComponent},
  {path : "patisserie",component:PatisserieComponent},
  {path : "salade",component:SaladeComponent},
  {path : "cuisine",component:CuisineComponent},
  {path : "registrer",component:RegistrerComponent},
  {path : "login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
