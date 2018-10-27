import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  @Input('amount')amount;
  @Input('fromVal')fromValue;
  @Input('toVal')toValue;
  @Input('fromCur')fromCurrency;
  @Input('toCur')toCurrency;
  isNaN: Function = Number.isNaN;

  constructor() { }

  ngOnInit() {
  }

}
