import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) {} 

  ngOnInit() {
    $('.tabs').tabs();
  }

  goCurrencyConverter(e) {
    e.preventDefault();
    console.log('asdfasdf')
    this.router.navigate(['currency-converter']); 
  }

  goViewHistory() {
    this.router.navigate(['view-history']); 
  }

}
