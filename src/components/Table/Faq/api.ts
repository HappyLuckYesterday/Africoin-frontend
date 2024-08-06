import { RowData } from './types';

const API_URL = 'https://africoin-web.vercel.app/api'; // Replace with your actual API URL

export const fetchData = async (): Promise<RowData[]> => {
//   return [{
//     _id: '1',
//     title: 'Question 1',
//     body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     _id: '2',
//     title: 'Question 2',
//     body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     _id: '3',
//     title: 'Question 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   }
// ];
  try {
    const response = await fetch(`${API_URL}/faq/list`);
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
    const response = await fetch(`${API_URL}/faq`, {
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
    const response = await fetch(`${API_URL}/faq/${updatedRow._id}`, {
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
    const response = await fetch(`${API_URL}/faq/${id}`, {
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
