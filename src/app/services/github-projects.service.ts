import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {share, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {
  constructor(protected http: HttpClient) {
  }

  getProjectsForUser(user: string): Observable<object[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const observable = this.http.get(`https://api.github.com/users/${user}/repos`, {headers: headers}).pipe(share());
    return this.manageCommonErrors(observable);
  }

  protected manageCommonErrors(httpObservable: Observable<any>): Observable<any> {
    return httpObservable.pipe(catchError((error: any, caught: Observable<any>) => {
      if (error.status === 401) {
        location.href = '/home';
      }
      return throwError(error);
    }));
  }
}
