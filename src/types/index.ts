export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
export type IBook = {
  _id?: string;
  title?: string;
  author?: string;
  genre?: string;
  image?: string;
  publication_date?: string;
  reviews?: {
    name: string;
    message: string;
  }[];
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
