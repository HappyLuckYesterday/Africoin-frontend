import { RowData } from './types';
import axios from 'axios';

const API_URL = 'https://e56f-2600-1f16-2b2-ef00-b24e-e6e0-e03c-eef4.ngrok-free.app/api/blog'; // Replace with your actual API URL

export const getItems = () => axios.get(API_URL);
export const getItemById = (id: string) => axios.get(`${API_URL}/${id}`);
export const createItem = (item: FormData) => axios.post(API_URL, item);
export const updateItem = (id: string, item: FormData) => axios.put(`${API_URL}/${id}`, item);
export const deleteItem = (id: string) => axios.delete(`${API_URL}/${id}`);

export const fetchData = async (): Promise<RowData[]> => {
  try {
    const response = await fetch(`${API_URL}/list`);
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getBlog = async (id: string): Promise<RowData> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    // console.log("blog", response.json());
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return {_id: '', image: '', title: '', body: '', view: 0, like: 0};
  }
}

export const addRow = async (newRow: FormData): Promise<RowData> => {
  console.log('newRow', newRow);
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: newRow,
    });
    if (!response.ok) {
      throw new Error('Failed to add row');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding row:', error);
    throw error;
  }
};

export const updateRow = async (id: string, updatedRow: FormData): Promise<RowData> => {
  console.log('updatedRow', updatedRow);
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: updatedRow,
    });
    if (!response.ok) {
      throw new Error('Failed to update row');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating row:', error);
    throw error;
  }
};

export const deleteRow = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete row');
    }
  } catch (error) {
    console.error('Error deleting row:', error);
    throw error;
  }
};
