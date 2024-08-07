/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2RU9FopSK7J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { Yeseva_One } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";

export function AboutPage() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <StoreIcon className="h-6 w-6" />
          <span>WebShop</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="ml-auto lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex items-center gap-2 font-semibold">
              <StoreIcon className="h-6 w-6" />
              <span>WebShop</span>
            </div>
            <div className="grid gap-4 py-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Home
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Productos
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Sobre Nosotros
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Reservas
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <nav className="ml-auto hidden gap-6 lg:flex">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Productos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sobre Nosotros
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Reservas
          </Link>
        </nav>
      </header>
      <div className="w-full">
        <Image
          alt="Placeholder Image"
          className="w-full h-[400px] object-cover"
          height={400}
          src="/placeholder.svg"
          style={{
            aspectRatio: "1920/400",
            objectFit: "cover",
          }}
          width={1920}
        />
      </div>
      <main className="w-full">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sobre Nosotros
                </h2>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  En WebShop, nos enorgullece ofrecer una experiencia de compra
                  excepcional a nuestros clientes. Nuestra tienda en línea
                  cuenta con una amplia selección de productos de alta calidad,
                  entrega rápida y un servicio al cliente incomparable.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tighter">
                  Horarios de Atención
                </h3>
                <div className="mt-4 grid gap-2 text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunes</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Martes</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Miércoles</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jueves</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Viernes</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Testimonios
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">
                        ¡Excelente servicio y productos de calidad!
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        He comprado varias veces en WebShop y siempre he quedado
                        satisfecho. La entrega es rápida y los productos son tal
                        y como se describen.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-medium">Juan Pérez</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Cliente
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">
                        ¡Increíble selección de productos!
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Encontré exactamente lo que buscaba en WebShop. La
                        variedad de productos es impresionante y los precios son
                        muy competitivos.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-medium">María Gómez</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Cliente
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">
                        ¡Excelente experiencia de compra!
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Comprar en WebShop ha sido una experiencia muy
                        agradable. El proceso de compra es sencillo y el
                        servicio al cliente es excepcional.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-medium">Carlos Rodríguez</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Cliente
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button>Ver más testimonios</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Síguenos en Instagram
              </h2>
              <div className="flex justify-center">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  @WebShop
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container max-w-7xl px-4 py-6 md:py-12 flex items-center justify-between text-sm">
          <p>© 2024 WebShop. Todos los derechos reservados.</p>
        </div>
        <div
          className="w-full h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: "url(/placeholder.svg)",
          }}
        />
      </footer>
    </>
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

function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
