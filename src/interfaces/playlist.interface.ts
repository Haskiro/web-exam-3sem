import { ITrack } from "./track.interface";

export interface IPlaylist {
	id: number | string;
	tracks_data: ITrack[];
	title: string;
	description: string;
	cover: string;
}
