import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectPhotosState = createFeatureSelector<any>('photos');
