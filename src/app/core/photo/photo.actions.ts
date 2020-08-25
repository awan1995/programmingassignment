import { createAction } from '@ngrx/store';

export const list = createAction('[Photo Component] List');
//export const loaded = createAction('[Photos API] Photos Loaded Success');
export const LoadItems = payload => ({
    type: '[Photos API] Photos Loaded Success',
    payload
  });