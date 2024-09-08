import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button} from '@/components/ui/button'
import Link from 'next/link'
import { AlignJustify } from "lucide-react"

export function Sidebar(){

    return(
        <div className="fixed top-0 left-0 z-50 flex w-full flex-col">
            <div className="flex flex-col">
              <header>
                <Sheet>
                    <SheetTrigger asChild>
                    <Button size="icon" className="rounded-none sm:hidden">
                        <AlignJustify />
                        <span className="sr-only">Abrir/Fecha menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <nav className="text-white">
                            
                               <h1 className="mb-4 text-xl font-bold">Menu</h1>
                               <div className=" text-white flex flex-col">
                               <Link href="#inicio-id"  className="hover:cursor-pointer hover:text-gray-500 mb-2">
                                   Inicio
                                </Link>
                                <Link href="#sobre-id"  className="hover:cursor-pointer hover:text-gray-500 mb-2">
                                   Sobre
                                </Link>
                                <Link href="#tecnologias-id"  className="hover:cursor-pointer hover:text-gray-500 mb-2">
                                   Tecnologias
                                </Link>
                                <Link href="#projetos-id"  className="hover:cursor-pointer hover:text-gray-500 mb-2">
                                   Projetos
                                </Link>
                                <Link href="#contato-id"  className="hover:cursor-pointer hover:text-gray-500 mb-2">
                                   Contato
                                </Link>
                                </div>
                            
                        </nav>
                    </SheetContent>
                </Sheet>
              </header>
            </div>
        </div>
    )
}