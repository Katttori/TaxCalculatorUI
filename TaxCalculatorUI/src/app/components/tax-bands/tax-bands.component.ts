import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TaxBand } from 'src/app/models/tax-band.model';
import { TaxBandService } from 'src/app/services/tax-band.service';

@Component({
  templateUrl: './tax-bands.component.html',
  styleUrls: ['./tax-bands.component.scss']
})
export class TaxBandsComponent implements OnInit {

  taxBands: TaxBand[];

  constructor(private taxBandService: TaxBandService) {}

  ngOnInit(): void {
    this.taxBandService.getTaxBands()
      .pipe(first())
      .subscribe(
        taxBands => this.taxBands = taxBands
      );
  }
}
