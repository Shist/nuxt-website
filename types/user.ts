export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type IUserIconData = Pick<IUser, "first_name" | "last_name" | "avatar">;

export function isUserIconData(value: unknown): value is IUserIconData {
  return (
    typeof value === "object" &&
    value !== null &&
    "first_name" in value &&
    typeof value.first_name === "string" &&
    "last_name" in value &&
    typeof value.last_name === "string" &&
    "avatar" in value &&
    typeof value.avatar === "string"
  );
}
