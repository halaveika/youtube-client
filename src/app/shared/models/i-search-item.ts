export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: Snippet,
  statistics: Statistic,
}

interface Snippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: Thumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: { title:string, description: string },
  defaultAudioLanguage: string,
}

interface Thumbnails {
  default: ThumbnailsOptions,
  medium: ThumbnailsOptions,
  high: ThumbnailsOptions,
  standard: ThumbnailsOptions,
  maxres: ThumbnailsOptions,
}

interface ThumbnailsOptions {
  url: string,
  width: number,
  height: number,
}

interface Statistic {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}
