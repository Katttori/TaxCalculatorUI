import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxBand } from '../models/tax-band.model';

@Injectable({
  providedIn: 'root'
})
export class TaxBandService {

  constructor(private http: HttpClient) { }

  public getTaxBands(): Observable<TaxBand[]> {
    return this.http.get<TaxBand[]>('tax-band');
  }
}
