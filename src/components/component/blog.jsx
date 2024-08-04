/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ur2NtVAxkkA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 flex items-center justify-between h-16">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-lg"
            prefetch={false}
          >
            <FlowerIcon className="w-6 h-6" />
            <span>Skincare & Makeup</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-6">
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Contact
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-full items-center py-2 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Sales{" "}
                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        North America
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        Europe
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        Asia
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        South America
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        Africa
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        Australia
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              target="_blank"
              className="text-primary-foreground hover:text-primary-foreground/80"
              prefetch={false}
            >
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-primary-foreground hover:text-primary-foreground/80"
              prefetch={false}
            >
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Webshop
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover the Best Skincare and Makeup Products
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Explore our wide range of high-quality skincare and makeup
                products, designed to nourish and enhance your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              alt="Hero Image"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Skincare Products</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Skincare Products"
                  width={400}
                  height={300}
                  className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">Skincare</h3>
                  <p className="text-sm text-muted-foreground">
                    Nourish your skin
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Makeup Products</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Makeup Products"
                  width={400}
                  height={300}
                  className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">Makeup</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhance your beauty
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">Learn About Us</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="About Us"
                  width={400}
                  height={300}
                  className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">About Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover our story
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/placeholder.svg"
              alt="Featured Products"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Products
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Explore our top-selling skincare and makeup products, carefully
                curated to meet your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Featured
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 w-full">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; 2024 Skincare & Makeup. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 md:gap-6 text-sm">
            <Link
              href="#"
              className="hover:text-muted-foreground/80"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-muted-foreground/80"
              prefetch={false}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function FlowerIcon(props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

