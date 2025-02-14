"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import {
  Home,
  Users,
  Store,
  ShoppingCart,
  CreditCard,
  ClipboardList,
  Settings,
  X,
  LogOut,
  ChevronRight,
  Box,
  ArrowLeftRight,
  FileText,
  BarChart,
  Factory,
  Bell,
  FileSpreadsheet,
  Calendar,
  Coffee,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import TopBar from "@/components/common-components/TopNav";
import Main from "../dashboard/tabs/Main";
import UserManagement from "../dashboard/tabs/UserManagement";
import CustomerSuppliers from "../dashboard/tabs/CustomersSuppliers";
import Products from "../dashboard/tabs/Products/AllProducts";
import AddProduct from "./tabs/Products/AddProducts";
import Purchases from "../dashboard/tabs/Purchases";
import ImportSales from "../dashboard/tabs/Sales/ImportSales";
import Stock from "../dashboard/tabs/StockAdjustment";
import Expense from "../dashboard/tabs/Expenses/AllExpenses";
import AddExpense from "../dashboard/tabs/Expenses/AddExpenses";
import Production from "../dashboard/tabs/Production/AllProduction";
import AddProduction from "../dashboard/tabs/Production/AddProduction";
import Payment from "../dashboard/tabs/PaymentAccounts";
import Reports from "../dashboard/tabs/Reports";
import Bookings from "../dashboard/tabs/Bookings";
import Kitchen from "../dashboard/tabs/Kitchen";
import Orders from "../dashboard/tabs/Orders";
import Notification from "../dashboard/tabs/Notification Templates";
import Setting from "../dashboard/tabs/Settings";
import Link from "next/link";
import AddQuotation from "./tabs/Sales/AddQuotation";
import AllQuotation from "./tabs/Sales/AllQuotation";
import AddGdn from "./tabs/Sales/AddGdn";
import AllGdn from "./tabs/Sales/AllGdn";
import AddDraft from "./tabs/Sales/AddDraft";
import AllDraft from "./tabs/Sales/AllDraft";
import AddSales from "./tabs/Sales/AddSales";
import AllSales from "./tabs/Sales/AllSales";
import AddGop from "./tabs/Sales/AddGop";
import AllGop from "./tabs/Sales/AllGop";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const tabParam = router.query.tab as string;
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [router.query]);

  const changeTab = (tabName: string) => {
    setActiveTab(tabName);
    router.push(`/dashboard?tab=${tabName}`);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: "Dashboard", view: "dashboard", icon: Home },
    { name: "User Management", view: "user-management", icon: Users },
    {
      name: "Customers & Suppliers",
      view: "customers-suppliers",
      icon: Store,
      hasSubmenu: true,
      submenu: [
        { name: "All Customers & Suppliers", view: "customers-suppliers" },
        { name: "Add Customer/Supplier", view: "add-customer-supplier" },
      ],
    },
    {
      name: "Products",
      view: "products",
      icon: Box,
      hasSubmenu: true,
      submenu: [
        { name: "All Products", view: "products" },
        { name: "Add Product", view: "add-product" },
      ],
    },
    { name: "Purchases", view: "purchases", icon: ShoppingCart },
    {
      name: "Sales",
      view: "sales",
      icon: BarChart,
      hasSubmenu: true,
      submenu: [
        { name: "Import sales", view: "import-sales" },
        { name: "Add Quotation", view: "add-quotation" },
        { name: "All Quotation", view: "all-quotation" },
        { name: "Add GDN", view: "add-gdn" },
        { name: "All GDN", view: "all-gdn" },
        { name: "Add Draft", view: "add-draft" },
        { name: "All Draft", view: "all-draft" },
        { name: "Add Sale", view: "add-sale" },
        { name: "All Sale", view: "all-sale" },
        { name: "Add Gate Out Pass", view: "add-gop" },
        { name: "All Gate Out Pass", view: "all-gop" },
      ],
    },
    { name: "Stock Transfers", view: "stock-transfers", icon: ArrowLeftRight },
    { name: "Stock Adjustment", view: "stock-adjustment", icon: ClipboardList },
    {
      name: "Expenses",
      view: "expenses",
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        { name: "All Expenses", view: "expenses" },
        { name: "Add Expenses", view: "add-expenses" },
      ],
    },
    {
      name: "Production",
      view: "production",
      icon: Factory,
      hasSubmenu: true,
      submenu: [
        { name: "All Production", view: "production" },
        { name: "Add Production", view: "add-production" },
      ],
    },
    { name: "Payment Accounts", view: "payment-accounts", icon: CreditCard },
    { name: "Reports", view: "reports", icon: FileSpreadsheet },
    { name: "Bookings", view: "bookings", icon: Calendar },
    { name: "Kitchen", view: "kitchen", icon: Coffee },
    { name: "Orders", view: "orders", icon: ClipboardList },
    {
      name: "Notification Templates",
      view: "notification-templates",
      icon: Bell,
    },
    { name: "Settings", view: "settings", icon: Settings },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Main />;
      case "user-management":
        return <UserManagement />;
      case "customers-suppliers":
        return <CustomerSuppliers />;
      case "add-customer-supplier":
        return <div>Add Customer/Supplier Component</div>; // You'll need to create this component
      case "products":
        return <Products />;
      case "add-product":
        return <AddProduct />;
      case "purchases":
        return <Purchases />;
      case "import-sales":
        return <ImportSales />;
      case "add-quotation":
        return <AddQuotation />;
      case "all-quotation":
        return <AllQuotation />;
      case "add-gdn":
        return <AddGdn />;
      case "all-gdn":
        return <AllGdn />;
      case "add-draft":
        return <AddDraft />;
      case "all-draft":
        return <AllDraft />;
      case "add-sale":
        return <AddSales />;
      case "all-sale":
        return <AllSales />;
      case "add-gop":
        return <AddGop />;
      case "all-gop":
        return <AllGop />;
      case "stock-transfers":
        return <div>Stock Transfers Component</div>; // You'll need to create this component
      case "stock-adjustment":
        return <Stock />;
      case "expenses":
        return <Expense />;
      case "add-expenses":
        return <AddExpense />;
      case "production":
        return <Production />;
      case "add-production":
        return <AddProduction />;
      case "payment-accounts":
        return <Payment />;
      case "reports":
        return <Reports />;
      case "bookings":
        return <Bookings />;
      case "kitchen":
        return <Kitchen />;
      case "orders":
        return <Orders />;
      case "notification-templates":
        return <Notification />;
      case "settings":
        return <Setting />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 z-30 lg:relative lg:translate-x-0`}
      >
        <div className="p-4 flex justify-center">
          <Link href="/">
            <Image
              src="/bizzlogo.png"
              alt="Bizz Stats"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <ScrollArea className="flex-grow">
          <nav className="mt-5 px-2">
            {menuItems.map((item) => (
              <React.Fragment key={item.view}>
                {item.hasSubmenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`group flex items-center w-full px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 ${
                          activeTab === item.view
                            ? "text-gray-900 bg-gray-100"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <item.icon
                          className={`mr-3 h-5 w-5 transition ease-in-out duration-150 ${
                            activeTab === item.view
                              ? "text-zinc-600"
                              : "text-zinc-400 group-hover:text-zinc-500"
                          }`}
                        />
                        {item.name}
                        <ChevronRight className="ml-auto h-5 w-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.view}
                          onClick={() => changeTab(subItem.view)}
                        >
                          {subItem.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    className={`group flex items-center w-full px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 ${
                      activeTab === item.view
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => changeTab(item.view)}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 transition ease-in-out duration-150 ${
                        activeTab === item.view
                          ? "text-zinc-600"
                          : "text-zinc-400 group-hover:text-zinc-500"
                      }`}
                    />
                    {item.name}
                  </button>
                )}
              </React.Fragment>
            ))}
          </nav>
        </ScrollArea>
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 focus:outline-none focus:bg-gray-100">
            <LogOut className="w-5 h-5 mr-3 text-gray-400" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden p-2">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-2 py-4">
            <Button
              className="lg:hidden mb-4"
              onClick={toggleSidebar}
              variant="outline"
              size="icon"
            >
              {isSidebarOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
