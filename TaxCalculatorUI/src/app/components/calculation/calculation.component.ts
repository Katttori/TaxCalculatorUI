import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { first } from 'rxjs';
import { CalculationResult } from 'src/app/models/calculation-result.model';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent {

  income: number;
  calculationResult: CalculationResult;

  @ViewChild('incomeInput') incomeInput: NgModel;

  constructor(private calculationService: CalculationService) {}

  calculate() {
    if (!this.incomeInput.valid) {
      this.incomeInput.control.markAsTouched();
    } else {
      this.calculationService.calculate(this.income)
        .pipe(first())
        .subscribe(result => this.calculationResult = result);
    }
  }
}
