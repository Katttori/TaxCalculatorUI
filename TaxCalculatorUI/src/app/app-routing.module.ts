import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationComponent } from './components/calculation/calculation.component';
import { TaxBandsComponent } from './components/tax-bands/tax-bands.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calculation'
  },
  {
    path: 'calculation',
    component: CalculationComponent,
  },
  {
    path: 'tax-bands',
    component: TaxBandsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
