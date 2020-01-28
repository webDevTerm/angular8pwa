import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=8dde4181';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

searchMovies(searchTerm: string): Observable<any> {

return this.http.get(baseUrl, {params: {s: searchTerm}});

};

}
