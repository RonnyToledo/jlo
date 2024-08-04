/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qjxzJZjotAE
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
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
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function AdminAdd() {
  return (<>
    <header
      className="bg-white text-gray-900 py-4 px-6 flex items-center justify-between">
      <Link className="flex items-center gap-2" href="#">
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Volver</span>
      </Link>
      <h1 className="text-xl font-semibold">Nuevo Producto</h1>
      <div />
    </header>
    <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <form className="space-y-6">
        <div>
          <Label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="images">
            Imágenes
          </Label>
          <div
            className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <CloudUploadIcon className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600 dark:text-gray-400">
                <label
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  htmlFor="images">
                  <span>Subir archivos</span>
                  <input className="sr-only" id="images" name="images" type="file" />
                </label>
                <p className="pl-1">o arrastrar y soltar</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF hasta 10MB</p>
            </div>
          </div>
        </div>
        <div>
          <Label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="title">
            Título
          </Label>
          <div className="mt-1">
            <Input id="title" name="title" required type="text" />
          </div>
        </div>
        <div>
          <Label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="price">
            Precio
          </Label>
          <div className="mt-1">
            <Input id="price" name="price" required step="0.01" type="number" />
          </div>
        </div>
        <div>
          <Label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="category">
            Categoría
          </Label>
          <div className="mt-1">
            <Select id="category" name="category" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="electronics">Electrónica</SelectItem>
                  <SelectItem value="clothing">Ropa</SelectItem>
                  <SelectItem value="home">Hogar</SelectItem>
                  <SelectItem value="sports">Deportes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Checkbox id="special" name="special" />
          </div>
          <div className="ml-3 text-sm">
            <Label
              className="font-medium text-gray-700 dark:text-gray-300"
              htmlFor="special">
              Producto especial
            </Label>
          </div>
        </div>
        <div>
          <Label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="description">
            Descripción
          </Label>
          <div className="mt-1">
            <Textarea id="description" name="description" required rows={3} />
          </div>
        </div>
        <div>
          <Label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="discount">
            Descuento
          </Label>
          <div className="mt-1 flex items-center">
            <Input id="discount" max="100" min="0" name="discount" step="1" type="number" />
            <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">%</span>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            className="bg-black hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded"
            type="submit">
            Guardar
          </Button>
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


function CloudUploadIcon(props) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>)
  );
}