export type UserType = {
  id: string;
  fullName: string;
  email: string;
  joinDate: string;
  jobTitle: string;
  estatus: boolean;
  number: string;
  password: string;
};

export interface IUserState {
  users: UserType[];
  user?: UserType;
}
export type UpdateUser = {
  id: string;
  body: UserType;
};

export type UserProps = {
  headerArray: string[];
  rowDataArray: UserType[];
};
