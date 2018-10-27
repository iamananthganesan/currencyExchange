import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { IViewedConversion } from './../../models/viewed-conversion.model';
import { DelHistory } from 'src/app/store/conversion.actions';
declare var $;

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {

  selectedIndex;

  @Select(state => state.conversion) viewedConversions$: Observable<IViewedConversion[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    $('.modal').modal();
  }

  deleteHistory(index:number){
    this.store.dispatch(new DelHistory({position:index}));
  }

}
