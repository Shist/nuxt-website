export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type IUserName = Pick<IUser, "first_name" | "last_name">;

export function isUserName(value: unknown): value is IUserName {
  return (
    typeof value === "object" &&
    value !== null &&
    "first_name" in value &&
    "last_name" in value
  );
}
