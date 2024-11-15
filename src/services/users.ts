import { GetUsersParams, GetUsersResponse } from '@/types/users';
import { api } from './api';

export async function getUsers(params: GetUsersParams) {
  const { data } = await api.get<GetUsersResponse>('/users', { params });

  return data;
}
