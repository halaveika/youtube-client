import { ISearchItem } from './i-search-item';

export interface IVideoResponse {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: ISearchItem[],
}

interface PageInfo {
  totalResults: number,
  resultsPerPage: number
}
