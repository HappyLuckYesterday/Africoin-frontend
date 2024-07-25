import React, { useState, useEffect } from 'react';  

interface DataRow {  
  id: number;  
  name: string;  
  value: string;  
}  

interface ModalProps {  
  onClose: () => void;  
  onSave: (row: DataRow) => void;  
  rowData: DataRow | null;  
}  

const MyModal: React.FC<ModalProps> = ({ onClose, onSave, rowData }) => {  
  const [formData, setFormData] = useState<DataRow>({ id: 0, name: '', value: '' });  

  useEffect(() => {  
    if (rowData) {  
      setFormData(rowData);  
    }  
  }, [rowData]);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setFormData({  
      ...formData,  
      [e.target.name]: e.target.value,  
    });  
  };  

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    onSave(formData);  
  };  

  return (  
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-75">  
      <div className="bg-white p-6 rounded-lg shadow-lg">  
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">  
              Name  
            </label>  
            <input  
              type="text"  
              name="name"  
              id="name"  
              value={formData.name}  
              onChange={handleChange}  
              className="shadow border rounded w-full py-2 px-3 text-gray-700"  
              required  
            />  
          </div>  
          <div className="mb-4">  
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">  
              Value  
            </label>  
            <input  
              type="text"  
              name="value"  
              id="value"  
              value={formData.value}  
              onChange={handleChange}  
              className="shadow border rounded w-full py-2 px-3 text-gray-700"  
              required  
            />  
          </div>  
          <div className="flex justify-end space-x-4">  
            <button  
              type="button"  
              onClick={onClose}  
              className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700"  
            >  
              Cancel  
            </button>  
            <button  
              type="submit"  
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"  
            >  
              Save  
            </button>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default MyModal;  