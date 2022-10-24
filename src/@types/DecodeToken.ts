export default interface DecodeToken {
  payload: {
    id: number;
    username: string;
  };
  [key: string]: any;

}