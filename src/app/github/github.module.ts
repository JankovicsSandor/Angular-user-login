import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubService } from './services/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GithubComponent,
    GithubSearchComponent
  ],
  providers: [GithubService],
  imports: [
    CommonModule,
    GithubRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GithubModule { }
