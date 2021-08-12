import { Injectable } from '@angular/core';
import { SearchResponse } from '../models/search-response.model';
import MockResponse from '../shared/mockData/mockYoutubeResponse.json';

@Injectable({
  providedIn: 'root',
})
export class GetResponseService {
  public searchPattern ='';
  public response: SearchResponse | null  = null;
  getResponse(pattern:string): SearchResponse {
    this.searchPattern = pattern;
    return  this.getMockResponse();
  };
  getMockResponse(): SearchResponse
  { this.response = MockResponse;
    return  this.response }
}
