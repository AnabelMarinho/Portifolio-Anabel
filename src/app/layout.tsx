import type { Metadata } from "next";
import "./globals.css";
import {cn} from "@/lib/utils"
import {Sidebar} from '@/components/sidebar'
import {Header} from '@/components/header'

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Meu portifólio Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased"  
      )}>
        <Header />
        <Sidebar />
        {children}
      </body>
        
   {/* <Card className='w-96 flex flex-col justify-center ml-10 p-10'>
    <CardHeader>
      <CardTitle>Perfil</CardTitle>
      <CardDescription>Preencha com seus dados</CardDescription>
    </CardHeader>
  
      <Input placeholder='escreva seu nome' className='mb-2' />
      <Input placeholder='senha' type='password' />
     
    
    <Button className='mt-4'>Enviar</Button>
   </Card> */}
  
    </html>

    
  );
}