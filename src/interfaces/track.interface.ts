export interface ArtistData {
	id: number | string;
	nickname: string;
}

export interface ITrack {
	id: number | string;
	artists_data: ArtistData[];
	title: string;
	audio_file: string;
	cover: string;
	released_at: string;
}
