import React, { useState } from 'react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login or signup logic here
        alert(`${isLogin ? 'Login' : 'Signup'} submitted!`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <div className="mt-4 text-center">
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:underline focus:outline-none"
                >
                    {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;