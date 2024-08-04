import Link from "next/link";
import {
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectValue,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import React from "react";

export function NavBar({ tienda }) {
  return (
    <header
      className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800"
      style={{ position: "sticky", top: 0 }}
    >
      <Link
        className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50"
        href="#"
      >
        <Package2Icon className="h-6 w-6" />
        <span>{tienda}</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href={`/t/${tienda}/`}
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href={`/t/${tienda}/about`}
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href={`/t/${tienda}/products`}
        >
          Products
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href={`/t/${tienda}/reservation`}
        >
          Reservation
        </Link>
        <div className="relative">
          <Selectitems monedas={tienda} m_default={tienda} />
        </div>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href={`/login/`}
        >
          Admin
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50">
              <Package2Icon className="h-6 w-6" />
              <span>{tienda}</span>
            </div>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
              href={`/t/${tienda}/`}
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
              href={`/t/${tienda}/about`}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
              href={`/t/${tienda}/products`}
            >
              Products
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
              href={`/t/${tienda}/reservation`}
            >
              Reservation
            </Link>
            <div className="relative">
              <Selectitems monedas={tienda} m_default={tienda} />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 text-gray-400 hover:text-gray-50"
                href={`/login/`}
              >
                Admin
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
function Selectitems({ monedas, m_default }) {
  return (
    <Select>
      <SelectTrigger className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50">
        <SelectValue placeholder={m_default}></SelectValue>
      </SelectTrigger>
      <SelectContent className="w-40">
        <SelectGroup>
          <SelectLabel>Monedas</SelectLabel>
          <SelectItem value="Aaa">aaaaaa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
