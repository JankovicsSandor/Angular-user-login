import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGithubSearchResponseRoot } from '../models/github-response';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  getGithubRepositoriesFromSearch(search: string) {
    let searchParam = { q: search };
    return this.http.get<IGithubSearchResponseRoot>("https://api.github.com/search/repositories", { params: searchParam })
  }
}
