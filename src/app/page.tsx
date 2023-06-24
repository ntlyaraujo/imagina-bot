import Feed from "@components/Feed";

const Home = () => {
    return (
        <section
            className="flex flex-col items-center justify-center font-sans container mx-auto p-10">
            <h1 className="text-center head_text">
                Descubra & Compartilhe
                <br/>
                <span className="purple_gradient text-center">Prompts para IA</span>
            </h1>
            <p className="desc text-center w-full">
                Imagine é uma plataforma para criar, compartilhar e descobrir prompts para chatGPT, Midjourney, etc.
            </p>
            <Feed/>
        </section>
    )
}

export default Home