import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api";
import toast from "react-hot-toast";

export default function Signup() {

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  interface SignUpFormat {
    userName: string;
    email: string;
    password: string;
  }

  const [signupdata, setSignupdata] = useState<SignUpFormat>({
    userName: '',
    email: '',
    password: '',
  });

  const handleformSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post('/register', signupdata);
      if (response.status === 201) {
        toast.success('Register Successful');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error in Signing up!');
    } finally {
      setLoading(false);
    }
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="bg-white p-6 sm:p-8 w-full sm:max-w-md rounded-xl shadow-md space-y-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[#5052ce] text-2xl sm:text-3xl font-bold">Create your Account</h2>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleformSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-sm text-gray-700" htmlFor="userName">
                UserName
              </label>
              <input
                type="text"
                name="userName"
                value={signupdata.userName}
                onChange={handleValueChange}
                required
                className="w-full py-2 px-3 border border-gray-300 rounded-md mt-1 focus:outline-2 focus:outline-blue-400 transition duration-200"
                placeholder="Aman Rawat"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={signupdata.email}
                onChange={handleValueChange}
                required
                placeholder="aman123@gmail.com"
                className="w-full py-2 px-3 border border-gray-300 rounded-md mt-1 focus:outline-2 focus:outline-blue-400 transition duration-200"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                required
                name="password"
                type="password"
                value={signupdata.password}
                onChange={handleValueChange}
                placeholder="******"
                className="w-full py-2 px-3 border border-gray-300 rounded-md mt-1 focus:outline-2 focus:outline-blue-400 transition duration-200"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className={`bg-[#5052ce] hover:bg-[#3f4191] text-white font-semibold px-4 py-2 rounded-md w-full transition duration-200 ${loading ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                }`}
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </div>

          <div className="text-center">
            <span className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#5052ce] hover:text-[#6a6bd5] underline font-medium">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
