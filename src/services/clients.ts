import {
  CreateClientParams,
  GetClientsParams,
  GetClientsResponse,
} from '@/types/clients';
import { api } from './api';

export async function getClients(params: GetClientsParams) {
  const { data } = await api.get<GetClientsResponse>('/users', { params });

  return data;
}

export async function deleteClient(clientId: number) {
  const { data } = await api.delete<string>(`/users/${clientId}`);

  return data;
}

export async function createClient(body: CreateClientParams) {
  const { data } = await api.post('/users', body);

  return data;
}

export async function updateClient(clientId: number, body: CreateClientParams) {
  const { data } = await api.patch(`/users/${clientId}`, body);

  return data;
}
