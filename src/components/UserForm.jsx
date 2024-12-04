import { useState, useEffect } from 'react';

const UserForm = ({ user, addUser, updateUser, setEditingUser }) => {
    console.log("user", setEditingUser);
    
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        role: 'User',
        status: 'Active'
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }

        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const updatedData = { ...prevData, [name]: value };


            localStorage.setItem('formData', JSON.stringify(updatedData));

            return updatedData;
        });

        
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            updateUser(formData);
        } else {
            addUser(formData);
        }
        setEditingUser(null);
        setFormData({
        
            id: '',
            name: '',
            email: '',
            role: 'User',
            status: 'Active'
        });
    };

    return (
        <div className="bg-white p-4 shadow rounded-lg mt-[50px] ">
            <h2 className="text-2xl font-semibold mb-4">{user ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-[18px] font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder='Enter your name'
                        onChange={handleChange}
                        className="w-full  px-4 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium text-[18px] text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder='Enter you email'
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block  font-medium text-[18px] text-gray-700">Role</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-[18px] font-medium text-gray-700">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 hover:bg-green-700  text-white text-lg bg-green-500 rounded"
                >
                    {user ? 'Update User' : 'Add User'}
                </button>
            </form>
        </div>
    );
};

export default UserForm;
