export interface IOffer {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
}

export interface IOffersResponse {
  offersTotal: number;
  offers: IOffer[];
}