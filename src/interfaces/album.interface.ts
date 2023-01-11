import { ITrack } from "./track.interface";

export interface IAlbum {
	id: number | string;
	tracks_data: ITrack[];
	title: string;
	description: string;
	cover: string;
}
