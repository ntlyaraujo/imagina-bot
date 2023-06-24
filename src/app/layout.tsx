import '@styles/global.css'
import Nav from "@components/navigation/Nav";

export const metadata = {
    title: "Imagine",
    description: "Descubra e compartilhe prompts para IA",
}

type RootLayoutProps = {
    children: string
}

const RootLayout = ({children}: RootLayoutProps) => {
    return (
        <html lang="pt_BR">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </head>
        <body>
        <div className='main'>
            <div className='gradient'/>
        </div>

        <main className="app">
            <Nav/>
            {children}
        </main>
        </body>
        </html>

    )
}
export default RootLayout
