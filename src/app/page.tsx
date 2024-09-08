import { CardProjeto } from '@/components/cardprojeto';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Languages, Mail, Phone, Github, Linkedin, DivideCircle } from 'lucide-react'; // Importando ícones

export default function Home() {
  return (
    <main className='font-montserrat-alternates'>
      {/* Seção Home */}
      <section id='inicio-id' className="min-h-screen p-10 flex flex-col-reverse md:flex-row items-center justify-center bg-slate-50">
        <div className="flex flex-col md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center md:text-left m-4">
            Olá, me chamo <span className="text-pink-500">Anabel</span>,<br /> Sou uma programadora!
          </h1>
          <Button className="m-4 px-10"><a href="mailto:anabel.soares2001@gmail.com">Entre em contato comigo!</a></Button>
        </div>
        <img
          src="/img/astronauta.svg"
          alt="mulher astronauta"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-4 md:ml-20"
        />
      </section>
      
      {/* Seção Sobre Mim */}

      <section id='sobre-id' className="min-h-screen p-10 flex flex-col-reverse md:flex-row items-center justify-center bg-pink-50">
          <img
                    src="/img/gato-astronauta.svg"
                    alt="gato astronauta"
                    className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-4 md:ml-20"
                  />
        <Card className="w-full max-w-3xl p-6 mt-4  border-pink-300 min-w-[320px] shadow-lg">
          <CardContent>
            <CardTitle className="text-2xl font-bold mb-4">Sobre Mim</CardTitle>
            <CardDescription className="text-base">
              Meu nome é Anabel Marinho Soares, tenho 23 anos e um forte interesse em solucionar problemas,
              sempre com atenção aos detalhes. Valorizo o trabalho em equipe e gosto de colaborar para
              alcançar objetivos em comum. Sou flexível para aprender novas linguagens, frameworks e ferramentas.
            </CardDescription>
            <div className="flex items-center mb-4 mt-10">
              <Languages className="w-6 h-6 text-pink-500 mr-2" />
              <h3 className="text-lg font-semibold text-pink-500">Idiomas</h3>
            </div>
            <ul className="list-disc list-inside ml-8">
              <li>Português nativo</li>
              <li>Inglês intermediário</li>
              <li>Espanhol intermediário</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id='tecnologias-id' className="min-h-screen p-10 flex flex-col items-center bg-gray-800">
      <div className='border rounded p-12 border-pink-500 mt-4'>


      <h1 className='flex justify-center text-4xl text-white mb-8 font-semibold  md:text-start'>Tecnologias</h1>
        
        {/* Container para os cards */}
        <div className="flex flex-wrap justify-center gap-4 shadow-lg shadow-pink-500 border-pink-500 border p-4 rounded">
          {/* Card Front-End */}
          <Card className="w-[200px] p-4 border-pink-300 bg-transparent">
            <CardContent>
              <CardTitle className="text-[24px] mb-4 text-white">Front-End</CardTitle>
              <div className="text-base text-pink-400">
                <ul className="list-disc list-inside text-[12px]">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Card Back-End */}
          <Card className="w-[200px] p-4 border-pink-300 bg-transparent">
            <CardContent>
              <CardTitle className="text-[24px] mb-4 text-white">Back-End</CardTitle>
              <div className="text-base text-pink-400">
                <ul className="list-disc list-inside text-[12px]">
                  <li>C#</li>
                  <li>Java</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Frameworks/Bibliotecas */}
          <Card className="w-[200px] p-4 border-pink-300 bg-transparent">
            <CardContent>
              <CardTitle className="text-[24px] mb-4 text-white">Frameworks<br/>/Bibliotecas</CardTitle>
              <div className="text-base text-pink-400">
                <ul className="list-disc list-inside text-[12px]">
                  <li>TailwindCSS</li>
                  <li>Nextjs</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Shardcn ui</li>
                  <li>Nodejs</li>
                  <li>Express</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Banco de Dados */}
          <Card className="w-[200px] p-4 border-pink-300 bg-transparent">
            <CardContent>
              <CardTitle className="text-[24px] mb-4 text-white">Banco de Dados</CardTitle>
              <div className="text-base text-pink-400">
                <ul className="list-disc list-inside text-[12px]">
                  <li>MySQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Outras */}
          <Card className="w-[200px] p-4 border-pink-300 bg-transparen">
            <CardContent>
              <CardTitle className="text-[24px] mb-4 text-white">Outras</CardTitle>
              <div className="text-base text-pink-400">
                <ul className="list-disc list-inside text-[12px]">
                  <li>Git</li>
                  <li>Vs Code</li>
                  <li>Visual Studio</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>
       
      <div className='pl-4'> 
        <h1 className='absolute vertical-text  md:text-5xl  mt-10 text-white  shiny-text font-semibold text-3xl '>Projetos</h1>
      </div>

      <section id="projetos-id" className="min-h-screen p-10 flex flex-col items-center bg-gradient-to-b bg-custom-gradient">
      <div className='p-2'>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <CardProjeto></CardProjeto>
          <CardProjeto></CardProjeto>
          <CardProjeto></CardProjeto>
        </div>
        </div>
      </section>

      <section id="contato-id" className="min-h-screen p-10 flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-pink-300">
      <Card className='bg-primary border-none mt-5 p-4 flex flex-col items-center shadow-gray-800 shadow-lg md:items-start md:w-1/2'>
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Entre em Contato</h2>
          <div className='text-[12px] text-center md:text-left'>
            <p className="text-white mb-2 flex">
              <Mail className='mr-3 text-pink-500'/><a href="mailto:anabel.soares2001@gmail.com" className="underline hover:text-pink-500">anabel.soares2001@gmail.com</a>
            </p>
            <p className="text-white mb-2 flex">
              <Phone className='mr-3 text-pink-500'/> <a href="tel:+5581509577" className="underline hover:text-pink-500">+55 98150-9577</a>
            </p>
            <p className="text-white mb-2 flex">
              <Github className='mr-3 text-pink-500'/> <a href="https://github.com/AnabelMarinho" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500">GitHub</a>
            </p>
            <p className="text-white mb-2 flex">
            <Linkedin className='mr-3 text-pink-500'/> <a href="https://www.linkedin.com/in/anabel-marinho-0b718231b/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500">LinkedIn</a>
            </p>
          </div>
        </div>
     </Card>
      <img
        src="/img/contato.svg"
        alt="Contato"
        className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-4 md:mt-0 md:ml-4"
      />
    </section>


      <footer className="p-5 bg-primary text-white flex flex-col items-center justify-center text-[12px]">
        <p>&copy; {new Date().getFullYear()}, Anabel Marinho Soares. Todos os direitos reservados.</p>
        <p className="mt-2">
          Imagens por <a href="https://storyset.com/" className="underline hover:text-pink-500" target="_blank" rel="noopener noreferrer">Storyset</a>.
        </p>
      </footer>




      
    </main>
  );
}
