export interface ISnippetItem {
  kind: string,
  etag: string,
  id: {id:string, videoId: string}
  snippet: Snippet,
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
