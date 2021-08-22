import { ISearchItem } from './i-search-item.model';

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
