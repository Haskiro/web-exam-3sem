import { IUser } from "./user.interface";

export interface IPost {
	postId: string | number;
	author: IUser;
	text: string;
	likesCount: string | number;
	repostsCount: string | number;
	commentsCount: string | number;
	imageUrl: string;
}
