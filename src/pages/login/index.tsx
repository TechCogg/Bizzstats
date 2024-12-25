
'use client';
import '@/styles/globals.css'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Bizzstat from '../../../public/bizzlogo.png';
import Google from '../../../public/google.svg';
import Apple from '../../../public/apple.svg';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src={Bizzstat}
            alt="Bizz Stats Logo"
            width={60}
            height={60}

          />
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold">Sign in To Your Account</h1>
            <p className="text-gray-600">Join Us and Unlock Endless Possibilities</p>
          </div>
          <div className="w-[60px]"></div> {/* Spacer for alignment */}
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center p-6">

        {/* Form Container */}
        <div className="w-full max-w-[400px] space-y-6">


          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password
              </Link>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full text-white bg-[#5668e6] hover:bg-[#3d4cb5]">
              Login
            </Button>
          </form>

          {/* Social Sign In */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Image src={Google} alt="Google" width={20} height={20} className="mr-2" />
                Sign up with Google
              </Button>
              <Button variant="outline" className="w-full">
                <Image src={Apple} alt="Apple" width={20} height={20} className="mr-2" />
                Sign up with Apple
              </Button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:underline">
              Sign up for free
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#5577ec] text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-4 py-2">
          <p className="text-center md:text-left">©2024 Quad. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-gray-300">
              Your Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

