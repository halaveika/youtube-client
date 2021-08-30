import { ISnippetItem } from './i-snippet-item.model';

export interface ISearchResponse {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: ISnippetItem[],
}

interface PageInfo {
  totalResults: number,
  resultsPerPage: number
}
