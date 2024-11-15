export type GetClientsParams = {
  page: number;
  limit: number;
};

export type ClientProps = {
  id: number;
  salary: number;
  companyValuation: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetClientsResponse = {
  clients: ClientProps[];
};

export type CreateClientParams = {
  salary: number;
  companyValuation: number;
  name: string;
};
