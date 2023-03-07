export interface IUserData {
  userId: IUserReg,
  name: string,
  speciality: string,
  bDay: string,
  location: string,
  description: string,
  // photoLink: string,
}
export interface IUser {
  nickname: string | undefined,
  email: string | undefined,
  password?: string,
}

export interface IUserReg extends IUser{
  activationLink?: string,
  isActivated?: boolean,
  __v?: number,
  _id?: string,
}