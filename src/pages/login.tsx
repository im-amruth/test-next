"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add real authentication logic here
    // Example: API call / credential check

    router.push("/home"); // redirect after successful login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-warning w-100">
            Login
          </button>

          <div className="text-center mt-3">
            <Link href="/forgot-password" className="small">
              Forgot Password?
            </Link>
          </div>

          <div className="text-center mt-2">
            <span className="small">Don't have an account? </span>
            <Link href="/register" className="small">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
