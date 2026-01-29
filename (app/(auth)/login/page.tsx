import { login } from '../actions'

export default function LoginPage({ searchParams }: { searchParams: { message: string, error: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" required className="w-full p-3 border rounded-lg mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" required className="w-full p-3 border rounded-lg mt-1" />
          </div>
          
          <button formAction={login} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
            Sign In
          </button>
          
          {searchParams?.error && <p className="text-red-500 text-sm text-center">{searchParams.error}</p>}
          {searchParams?.message && <p className="text-green-500 text-sm text-center">{searchParams.message}</p>}
        </form>
      </div>
    </div>
  )
          }
