"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I5znmMini6u
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import IMG from "@/images/jlo.png";
import IMG2 from "@/app/img.jpg";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import maquillaje from "@/images/maquillaje.jpg";
import skincare from "@/images/skincare.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import img1 from "@/images/1.jpg";
import img2 from "@/images/2.jpg";
import img3 from "@/images/3.jpg";
import img4 from "@/images/4.jpg";
import img5 from "@/images/5.jpg";
import img6 from "@/images/6.jpg";

async function fetchData() {
  const response = await fetch("https://r-and-h.github.io/json/tiendas.json");
  return response.json();
}

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [idSplice, setidSplice] = useState("");
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setTiendas(data));
  }, []);

  const today = new Date();
  return (
    <div className="w-full">
      <header
        className="bg-background"
        style={{ zIndex: 10, position: "sticky", top: 0 }}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between h-16  w-full bg-background">
          <div className="flex bg-background text-primary items-center gap-2 font-semibold text-lg">
            <Image
              src={IMG2}
              width="50"
              height="50"
              alt="Sales Groups"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <span>{"Jlo's Cosmetic"}</span>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetClose asChild>
                <div className="grid gap-4 py-6">
                  <Link
                    href="#home"
                    className="flex w-full bg-background text-primary items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                    style={{ justifyContent: "left" }}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="#about"
                    className="flex w-full bg-background text-primary items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                    style={{ justifyContent: "left" }}
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    href="#questions"
                    className="flex w-full bg-background text-primary  py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                    style={{ justifyContent: "left" }}
                  >
                    Skincare y Maquillaje
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex w-full items-center py-2 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                      Ubicacion
                      <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {tiendas.map((shop, index) => (
                        <DropdownMenuItem key={index}>
                          <Link
                            href={"#" + shop.provincia.split(" ").join("_")}
                            prefetch={false}
                            className="bg-background text-primary"
                            onClick={() => setIsOpen(false)}
                            style={{
                              justifyContent: "left",
                              scrollBehavior: "smooth",
                            }}
                          >
                            {shop.provincia}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="#mision"
                    className="flex w-full bg-background text-primary items-center py-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                    style={{ justifyContent: "left" }}
                  >
                    Nuestra Mision
                  </Link>
                </div>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32" id="home">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src={IMG}
            width="550"
            height="400"
            alt="Sales Groups"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {"Bienvenidos a Jlo's Cosmetic, una solucion para tu cuerpo"}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora nuestra red de grupos de ventas y conéctate con el equipo
              más cercano a tu ubicación.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href="#location"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Ver ubicaciones
            </Link>
            <Link
              href="#questions"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Leer más
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {"Sobre Jlo's Cosmetic"}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                El Skincare es el cuidado que le damos a nuestra piel para
                mantenerla saludable y el maquillaje es la práctica de decorar
                la piel y otras partes visibles del cuerpo para resaltarlas o
                mejorar su aspecto, apelando a productos cosméticos. Recuerda
                que un buen Skincare a los 20 sera una buena piel a los 40
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="carusel py-12">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                src={img1}
                alt="Skincare Products"
                width={100}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={img2}
                alt="Skincare Products"
                width={100}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={img3}
                alt="Skincare Products"
                width={100}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={img4}
                alt="Skincare Products"
                width={100}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={img5}
                alt="Skincare Products"
                width={100}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={img6}
                alt="Skincare Products"
                width={100}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="links">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Link
                href="https://www.instagram.com/jlos_cosmetics"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground p-6"
              >
                <InstagramIcon className="h-10 w-10" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-muted-foreground p-6"
              >
                <FacebookIcon className="h-10 w-10" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-muted-foreground p-6"
              >
                <GlobeIcon className="h-10 w-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24" id="questions">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-5 tracking-tighter sm:text-4xl md:text-5xl">
            Algunas Preguntas
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <span>Que es el Skincare?</span>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={skincare}
                alt="Skincare Products"
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Skincare</h3>
                <p className="text-sm text-muted-foreground">
                  El skincare, también conocido como cuidado de la piel, se
                  refiere a la rutina y los productos que se utilizan para
                  mantener la piel sana, limpia, hidratada y protegida. El
                  skincare incluye una variedad de pasos y productos diseñados
                  para abordar diferentes necesidades de la piel, como
                  limpiadores, tónicos, sueros, cremas hidratantes, protectores
                  solares, entre otros.
                </p>
              </div>
            </div>
            <span>Que es el Maquillaje?</span>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src={maquillaje}
                alt="Makeup Products"
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Maquillaje</h3>
                <p className="text-sm text-muted-foreground">
                  El maquillaje es el arte y la técnica de embellecer, resaltar
                  o modificar la apariencia de la piel y el rostro mediante la
                  aplicación de productos cosméticos. El maquillaje se utiliza
                  para realzar la belleza natural, corregir imperfecciones,
                  resaltar rasgos faciales, expresar creatividad o incluso
                  transformar completamente la apariencia de una persona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        id="location"
      >
        <div className="container px-4 md:px-6">
          <h2
            style={{ textAlign: "center" }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Nuestras ubicaciones
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Accordion type="single" collapsible>
              {tiendas.map((shop, index) => (
                <AccordionItem
                  value={index + "-item"}
                  key={index}
                  id={shop.provincia.split(" ").join("_")}
                >
                  <AccordionTrigger>{shop.provincia}</AccordionTrigger>
                  <AccordionContent>
                    {shop.envios.map((municipio, ind) => (
                      <Link
                        href={municipio.enlace}
                        key={ind}
                        className="group flex flex-col items-start justify-between rounded-lg border bg-background p-6 shadow-sm transition-colors hover:border-primary"
                        prefetch={false}
                      >
                        <div>
                          <h3 className="text-xl font-semibold">
                            {municipio.Municipio}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {shop.provincia}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="mision">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestra Mision
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestra misión es ofrecer productos de alta calidad que realcen
                la belleza natural de nuestros clientes. Buscamos proporcionar
                una experiencia única y personalizada en cada uno de nuestros
                puntos de venta, con el objetivo de lograr la satisfacción total
                de quienes confían en nosotros. Además, nos esforzamos por
                mantenernos al tanto de las últimas tendencias en la industria
                de la belleza y el cuidado personal, para así brindar a nuestros
                clientes opciones innovadoras y efectivas
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-muted text-muted-foreground py-6 w-full">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {today.getFullYear()} Skincare & Makeup. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 md:gap-6 text-sm">
            <Link
              href="https://r-and-h.github.io/Contact/#/home"
              className="hover:text-muted-foreground/80"
              prefetch={false}
            >
              R&H Company
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
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
