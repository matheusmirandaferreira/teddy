export type GetUsersParams = {
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

export type GetUsersResponse = {
  clients: ClientProps[];
};
