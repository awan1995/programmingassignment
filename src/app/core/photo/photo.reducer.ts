import { createReducer, on } from '@ngrx/store';
import { list,LoadItems } from './photo.actions';
 
export const initialState = {
    items: []
  };
 
  export function photoReducer(state = initialState, action) {
    switch (action.type) {
      case '[Photos API] Photos Loaded Success':
        return {
          ...state,
          items: action.payload
        };
      
      default:
        return state;
    }
  }