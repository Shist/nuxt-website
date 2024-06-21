export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type IUserIconData = Pick<IUser, "first_name" | "last_name" | "avatar">;
