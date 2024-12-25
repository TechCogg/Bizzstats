'use client';

import '@/styles/globals.css'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Bizzstat from '../../../public/bizzlogo.png';
import Google from '../../../public/google.svg';
import Apple from '../../../public/apple.svg';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header   >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src={Bizzstat}
            alt="Bizz Stats Logo"
            width={60}
            height={60}
           
          />
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold">Sign Up For Free</h1>
            <p className="text-gray-600">Join Us and Unlock Endless Possibilities</p>
          </div>
          <div className="w-[60px]"></div> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Form Section */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[500px] space-y-6  p-6 rounded-lg">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter Your Name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter Your Email" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Enter Company Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employees">No of Employees</Label>
                <Input id="employees" placeholder="No. of Employees" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter Your Phone" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country/Region</Label>
                <Input id="country" placeholder="Country Name" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter Password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-Enter Password"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full text-white bg-[#5668e6] hover:bg-[#3d4cb5]">
              Sign Up
            </Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
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

          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-[#5668e6] hover:underline font-medium ">
              Sign In
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Section */}
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

