export interface IUserData {
  name: string,
  speciality: string,
  bDay: string,
  location: string,
  description: string,
  photoLink?: string,
  _id?: string,
  __v?: number,
}
export interface IUser {
  nickname: string | undefined,
  email: string | undefined,
  password?: string,
  _id: string,
  userDataId: string,
  isActivated: boolean,
  __v?: number,
}

export interface IUserWithData {
  nickname: string | undefined,
  email: string | undefined,
  password?: string,
  _id?: string,
  isActivated: boolean,
  userDataId: IUserData,
}

export interface IUserReg extends IUser{
  activationLink?: string,
  __v?: number,
}

export interface IPost {
  userId: IUser | string, 
  postId?: string, 
  header: string,
  content: string, 
  file?: any, 
  likes?: Array<string>, 
}