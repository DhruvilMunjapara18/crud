const UserList = ({ users,  setEditingUser, deleteUser }) => {
    return (
        <div className="mt-4 overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full  divide-gray-200">
                <thead>
                    <tr className="text-left">
                        <th className="px-6 py-3 text-sm font-semibold text-gray-900">Name</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-900">Email</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-900">Role</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.role}</td>
                            <td className="px-6 py-4">{user.status}</td>
                            
                            <td className="px-6 py-4 space-x-2">
                                <button
                                    className="px-4 py-2 text-white bg-blue-500 rounded"
                                    onClick={() => setEditingUser(user)}
                                >
                                    Edit
                                </button>   
                                <button
                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
