import { IVideoData } from "./IVideoData";

export interface ICardData {
  videoData: IVideoData;
  description: string;
  videoLink: string;
  creatingDate: Date;
}
