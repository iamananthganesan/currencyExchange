import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { formatDate } from '@angular/common';
import { Store } from '@ngxs/store';
import { IExchangeRate } from './../../models/exchange-rate.model';
import { AddHistory } from './../../store/conversion.actions';
import { IViewedConversion } from './../../models/viewed-conversion.model';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  public amount;
  public from;
  public to;
  public fromVal;
  public toVal;
  public actualCur;
  currencies: { data: { [key: string]: string } };
  locale:string = 'en-US';
  public totalunit;
  public fromValue;
  public toValue;
  public fromCurrency;
  public toCurrency;

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
    this.http
      .get<IExchangeRate[]>("https://api.nomics.com/v1/exchange-rates?key=2018-09-demo-dont-deploy-b69315e440beb145")
      .subscribe(
        data => {
          this.setCurrencies(data);
        },
        error => {
          console.log("Error", error);
        }
    );
  }

  setCurrencies(currencies:IExchangeRate[]) {
    let curobj={};
    this.actualCur = {};
    for(let i=0;i<currencies.length;i++){
      curobj[currencies[i].currency] = null;
      this.actualCur[currencies[i].currency] = currencies[i].rate;
    }
    this.currencies = {
      data: curobj,
    };
  }

  onFromChange(event){
    this.from = event.target.value;
  }

  onToChange(event){
    this.to = event.target.value;
  }
  
  swapCurrency(){
    const from = this.from;
    this.from = this.to;
    this.to = from; 
  }

  convert(){
    let from = this.actualCur[this.from];
    this.fromVal = this.actualCur[this.to]/from;
    this.toVal = from/this.actualCur[this.to];

    let payload = {
      date: this.getDate(),
      amount: this.amount,
      from:this.from,
      to:this.to
    }
    this.addHistory(payload);
  }

  addHistory(conversion:IViewedConversion){
    this.store.dispatch(new AddHistory(conversion));
    this.setExchangeRate(conversion);
  }

  setExchangeRate(conversion:IViewedConversion){
    this.totalunit = conversion.amount;
    this.fromValue = this.fromVal;
    this.toValue = this.toVal;
    this.fromCurrency = conversion.from;
    this.toCurrency = conversion.to;
  }

  getDate(){
    const date = new Date();
    const formattedDate = formatDate(date, 'dd/MM/yyyy', this.locale) +' @ '+formatDate(date, 'H:mm', this.locale);
    return formattedDate;
  }

}
