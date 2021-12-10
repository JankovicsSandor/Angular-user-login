import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  searchForm = new FormControl();

  @Output() filterChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        map((query: string) => query ? query.trim() : ''),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        this.filterChanged.emit(val);
      });
  }

}
