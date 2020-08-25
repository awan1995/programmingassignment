import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PhotoService } from '../shared-services/photo.service';
import {list} from './photo.actions'
@Injectable()
export class PhotoEffects {
@Effect()
  loadPhotos$ = createEffect(() => this.actions$.pipe(
    ofType('[Photo Component] List'),
    mergeMap(() => this.photosService.getAllPhotos()
      .pipe(
        map(photos => ({ type: '[Photos API] Photos Loaded Success', payload: photos })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private photosService: PhotoService
  ) {}
}