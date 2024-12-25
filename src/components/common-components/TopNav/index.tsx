import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Settings, Bell, Calculator, DollarSign, Plus } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 space-y-3 sm:space-y-0">
      {/* Left Section: Dashboard Title */}
      <div className="w-full sm:w-auto">
        <h1 className="text-lg font-bold text-center sm:text-left">Dashboard</h1>
      </div>

      {/* Right Section: Icons, POS Button, Avatar, and Details */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        {/* Icons Section */}
        <div className="flex items-center space-x-1">
          {['Settings', 'Bell', 'Calculator', 'DollarSign', 'Plus'].map((icon) => (
            <Button key={icon} variant="ghost" size="icon" className="h-8 w-8">
              {icon === 'Settings' && <Settings className="h-4 w-4" />}
              {icon === 'Bell' && <Bell className="h-4 w-4" />}
              {icon === 'Calculator' && <Calculator className="h-4 w-4" />}
              {icon === 'DollarSign' && <DollarSign className="h-4 w-4" />}
              {icon === 'Plus' && <Plus className="h-4 w-4" />}
            </Button>
          ))}
        </div>

        {/* POS Button */}
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-sm text-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732091.png"
            alt="POS Icon"
            className="h-4 w-4 mr-1"
          />
          POS
        </Button>

        {/* Avatar and User Details */}
        <div className="flex items-center space-x-2 sm:border-l sm:border-gray-300 sm:pl-4">
          <Avatar>
            <AvatarImage src="https://placehold.co/600x400" alt="Albert Flores" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
          <div className="hidden sm:flex flex-col text-sm">
            <p className="font-medium">Albert Flores</p>
            <p className="text-xs text-gray-500">albertflores@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
