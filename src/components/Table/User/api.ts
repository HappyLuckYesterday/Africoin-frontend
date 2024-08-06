import { RowData } from './types';

const API_URL = 'https://africoin-web.vercel.app/api'; // Replace with your actual API URL

export const fetchData = async (): Promise<RowData[]> => {
  try {
    const response = await fetch(`${API_URL}/user/list`);
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const addRow = async (newRow: RowData): Promise<RowData> => {
  console.log('newRow', newRow);
  const { _id, ...rowWithoutId } = newRow; // remove _id since it will be generated on server
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowWithoutId),
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

export const updateRow = async (updatedRow: RowData): Promise<RowData> => {
  try {
    const response = await fetch(`${API_URL}/user/${updatedRow._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRow),
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
    const response = await fetch(`${API_URL}/user/${id}`, {
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
