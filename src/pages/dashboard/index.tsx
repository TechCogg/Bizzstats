import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useSearchParams } from "react-router-dom";
import Main from "../dashboard/tabs/Main";
import UserManagement from "../dashboard/tabs/UserManagement";
import CustomerSuppliers from "../dashboard/tabs/CustomersSuppliers";
import Products from "../dashboard/tabs/Products";
import Purchases from "../dashboard/tabs/Purchases";
import Sales from "../dashboard/tabs/Sales";
import Stock from "../dashboard/tabs/StockAdjustment";
import Expense from "../dashboard/tabs/Expenses";
import Production from "../dashboard/tabs/Production";
import Payment from "../dashboard/tabs/PaymentAccounts";
import Reports from "../dashboard/tabs/Reports";
import Bookings from "../dashboard/tabs/Bookings";
import Kitchen from "../dashboard/tabs/Kitchen";
import Orders from "../dashboard/tabs/Orders";
import Notification from "../dashboard/tabs/Notification Templates";
import Settings from "../dashboard/tabs/Settings";

import { useRouter } from "next/router";
import Bizzstat from "../../../public/bizzlogo.png";
import TopBar from "@/components/common-components/TopNav";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const tabParam = parseInt((router.query.tab as string) || "0", 10);
    setTabIndex(tabParam);
  }, [router.query]);

  const changeTabIndex = (index: number) => {
    setTabIndex(index);
    router.push(`/dashboard?tab=${index}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 flex justify-center">
          <div className="flex flex-col items-center">
            <a href="/dashboard">
              <img src={Bizzstat.src} alt="Bizz Stats" className="h-20 w-20" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            {/* Dashboard - Active State */}
            <Tab
              className="flex items-center px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
              onClick={() => changeTabIndex(0)}
            >
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </Tab>

            {/* User Management */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(1)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                User Management
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Customers & Suppliers */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(2)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Customers & Suppliers
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Products */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(3)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Products
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>
            {/* Purchases */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(4)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Purchases
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Sales */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(5)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Sales
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Stock Transfers */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(6)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                Stock Transfers
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Stock Adjustment */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(7)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Stock Adjustment
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Expenses */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(8)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Expenses
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Production */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(9)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                Production
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Payment Accounts */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(10)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Payment Accounts
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Reports */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(11)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Reports
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Bookings */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(12)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Bookings
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Kitchen */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(13)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 3v4a1 1 0 01-1 1H4a1 1 0 01-1-1V3m12 0h2a2 2 0 012 2v16a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h2m12 0V1m-4 0v2M9 1v2M3 11h18"
                  />
                </svg>
                Kitchen
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Orders */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(14)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Orders
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Notification Templates */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(15)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                Notification Templates
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>

            {/* Settings */}
            <Tab
              className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg group"
              onClick={() => changeTabIndex(16)}
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Settings
              </div>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tab>
          </div>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button className="flex items-center w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            <svg
              className="w-5 h-5 mr-3 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <TopBar />
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => changeTabIndex(index)}
        >
          <div className="p-6">
            <TabPanel>
              <Main />
            </TabPanel>
            <TabPanel>
              <UserManagement />
            </TabPanel>
            <TabPanel>
              <CustomerSuppliers />
            </TabPanel>
            <TabPanel>
              <Products />
            </TabPanel>
            <TabPanel>
              <Purchases />
            </TabPanel>
            <TabPanel>
              <Sales />
            </TabPanel>
            <TabPanel>
              <Stock />
            </TabPanel>
            <TabPanel>
              <Expense />
            </TabPanel>
            <TabPanel>
              <Production />
            </TabPanel>
            <TabPanel>
              <Payment />
            </TabPanel>
            <TabPanel>
              <Reports />
            </TabPanel>
            <TabPanel>
              <Bookings />
            </TabPanel>
            <TabPanel>
              <Kitchen />
            </TabPanel>
            <TabPanel>
              <Orders />
            </TabPanel>
            <TabPanel>
              <Notification />
            </TabPanel>
            <TabPanel>
              <Settings />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
