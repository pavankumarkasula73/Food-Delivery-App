import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

type FormType = 'login' | 'signup' | 'forgot';

const AuthForm = () => {
  const [formType, setFormType] = useState<FormType>('login');

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {formType === 'login' && 'Welcome Back'}
          {formType === 'signup' && 'Create Account'}
          {formType === 'forgot' && 'Reset Password'}
        </h2>
      </div>

      <form className="space-y-6">
        {formType === 'signup' && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>
        )}

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>

        {formType !== 'forgot' && (
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold
                   hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200
                   flex items-center justify-center gap-2"
        >
          {formType === 'login' && 'Sign In'}
          {formType === 'signup' && 'Create Account'}
          {formType === 'forgot' && 'Reset Password'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="mt-6 text-center space-y-2">
        {formType === 'login' && (
          <>
            <button
              onClick={() => setFormType('forgot')}
              className="text-orange-500 hover:underline block w-full"
            >
              Forgot Password?
            </button>
            <button
              onClick={() => setFormType('signup')}
              className="text-gray-600 hover:text-gray-800"
            >
              Don't have an account? Sign Up
            </button>
          </>
        )}
        {(formType === 'signup' || formType === 'forgot') && (
          <button
            onClick={() => setFormType('login')}
            className="text-gray-600 hover:text-gray-800"
          >
            Back to Login
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthForm;