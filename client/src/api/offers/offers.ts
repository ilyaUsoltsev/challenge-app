export interface IPaginationConfig {
  offset: number;
  limit: number;
}

export const fetchOffers = ({
  offset,
  limit,
}: IPaginationConfig): Promise<Response> => {
  return fetch(`http://localhost:3001/offers?offset=${offset}&limit=${limit}`);
};
