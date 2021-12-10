import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IGithubSearchResponse } from './models/github-response';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public searchResult: BehaviorSubject<IGithubSearchResponse[]> = new BehaviorSubject(<IGithubSearchResponse[]>[]);
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  searchGithub(filterParam: string) {
    this.githubService.getGithubRepositoriesFromSearch(filterParam).pipe(map((item) => item.items)).subscribe((val) => {
      this.searchResult.next(val);
    });
  }

}
