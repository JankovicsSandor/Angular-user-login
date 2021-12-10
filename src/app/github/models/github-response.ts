export interface IGithubSearchResponse {
  full_name: string;
  html_url: string;
}

export interface IGithubSearchResponseRoot {
  items:IGithubSearchResponse[]
}
