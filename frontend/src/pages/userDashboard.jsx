import Sidebar from "../components/Sidebar"

const UserDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
            </div>
            <div>
                <div className="p-6 bg-white shadow-md h-screen">
                    <h1 className="text-3xl font-bold text-gray-800 p-6">User Dashboard</h1>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard
