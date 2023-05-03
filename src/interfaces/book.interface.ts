export interface IBook {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  date: string;
  kind: string;
  description: string;
}

export const InitialBook: IBook = {
  id: '',
  title: '',
  author: '',
  imageUrl: '',
  date: '',
  kind: '',
  description: '',
};
