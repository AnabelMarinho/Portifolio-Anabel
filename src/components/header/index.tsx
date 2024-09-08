
export function Header(){

    return(
        <div className="fixed top-0  flex w-full bg-primary h-10 items-center justify-center px-4 shadow-md z-50">
           <div className="hidden sm:flex text-white space-x-4 justify-center">
            <a href="#inicio-id" className="hover:cursor-pointer hover:text-gray-500">Inicio</a>
            <a href="#sobre-id" className="hover:cursor-pointer hover:text-gray-500">Sobre</a>
            <a href="#tecnologias-id" className="hover:cursor-pointer hover:text-gray-500">Tecnologias</a>
            <a href="#projetos-id" className="hover:cursor-pointer hover:text-gray-500">Projetos</a>
            <a href="#contato-id" className="hover:cursor-pointer hover:text-gray-500">Contato</a>
           </div>

        </div>
    )
}