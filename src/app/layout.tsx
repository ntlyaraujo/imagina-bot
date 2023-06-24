import '@styles/global.css'
export const metadata = {
    title: "Imagina Bot",
    description: "Descubra e compartilhe prompts para IA",
}

interface RootLayoutProps {
    children: string
}

const RootLayout = ({children}: RootLayoutProps) => {
    return (
       <html lang="pt_BR">
              <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
              </head>
       <body>
       <main className="app">
           {children}
       </main>
       </body>
       </html>

    )
}
export default RootLayout
