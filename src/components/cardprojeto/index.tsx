import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
export function CardProjeto(){

    return(
      <Card className="w-[240px] shadow-lg shadow-gray-800 bg-slate-50 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div 
        className="w-full h-[150px] bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: 'url("/img/gato-astronauta.svg")' }} 
      />
      <CardContent className="p-4">
        <CardTitle className="text-[20px] mb-4 text-center">Projeto 1</CardTitle>
        <div className="text-sm mb-4 text-gray-700 h-[180px]">
          <p>Criação de um sistema de gerenciamento laboratorial, onde participei como programadora front-end.</p>
          <p className='text-pink-500 mt-5'><b >Tecnologias usadas:</b><br/>Nextjs; Tailwind; Shardcn ui.</p>
        </div>
        <div className="text-s bg-pink-400 p-1 rounded text-slate-50">
          Disponível em: <a href="#" className='hover:underline'>Aqui</a>
        </div>
      </CardContent>
    </Card>
    
    )
}