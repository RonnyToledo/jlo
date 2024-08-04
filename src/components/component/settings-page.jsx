/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/M0cjtdIgLEj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function SettingsPage() {
  return (<>
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <Link className="flex items-center gap-2" href="#">
        <ArrowLeftIcon className="h-6 w-6" />
        <span className="font-medium">Settings</span>
      </Link>
      <h1 className="text-lg font-semibold">Web Shop Configuration</h1>
    </header>
    <main className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <form className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="bank-card">Bank Card</Label>
          <Input id="bank-card" placeholder="Enter your bank card number" type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="transfers">Transfers</Label>
          <Switch id="transfers" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input id="instagram" placeholder="Enter your Instagram handle" type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="region">Region</Label>
          <Input id="region" placeholder="Enter your region" type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="available">Available Locally</Label>
          <Switch id="available" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="delivery">Delivery</Label>
          <Switch id="delivery" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reservation">Reservation</Label>
          <Switch id="reservation" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency-1">Currency 1</Label>
          <Input id="currency-1" type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency-2">Currency 2</Label>
          <Input id="currency-2" type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency-3">Currency 3</Label>
          <Input id="currency-3" type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency-4">Currency 4</Label>
          <Input id="currency-4" type="number" />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </main>
  </>);
}

function ArrowLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>)
  );
}
