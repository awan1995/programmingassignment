import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['number','name', 'username','email' , 'address','phone','website','company'];
  userDatabase: UserDatabase | null;
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.userDatabase = new UserDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.userDatabase.getUsers();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          console.log(data);
          
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {this.data = data});
  }
}

// export interface userApi {
//   items: userModel[];
//   total_count: number;
// }

// export interface userModel {
//   id:number;
//   name:string;
//   username:string;
//   email:string;
//   address:any;
//   phone:string;
//   website:string;
//   company:any;

// }

export class UserDatabase {
  constructor(private _httpClient: HttpClient) {}

  getUsers(): Observable<any> {
    

    return this._httpClient.get<any>(environment.serviceProviderURL+'users');
  }
}