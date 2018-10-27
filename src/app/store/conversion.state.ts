import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddHistory, DelHistory, Reset } from '../store/conversion.actions';
import { IViewedConversion } from './../models/viewed-conversion.model';
import { ViewedConversionHistory } from '../local-storage';

@State<IViewedConversion[]>({ 
  name: 'conversion', 
  defaults: ViewedConversionHistory().get()
})

export class ConversionState {
    @Action(AddHistory)
    Add(store: StateContext<IViewedConversion[]>, action: AddHistory) {
        let state = [...store.getState(),{...action.payload}];
        this.setState(store, state);
    }
    
    @Action(DelHistory)
    Delete(store: StateContext<IViewedConversion[]>, action: DelHistory) {
        let state = store.getState();
        this.setState(store, state.filter((state, index)=> index !== action.payload.position));
    } 

    setState(store, states:IViewedConversion[]){
        ViewedConversionHistory().set(states);
        store.setState(states);
    }
}
