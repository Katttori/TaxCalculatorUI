import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculationResult } from '../models/calculation-result.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient) { }

  public calculate(income: number): Observable<CalculationResult> {
    return this.http.get<CalculationResult>(`calculation?income=${income}`);
  }
}
