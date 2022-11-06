import Posts from "../Posts/"

export default function Articles(){
    return(
        <main className="container">
            <div className="container-posts mt-5">
                <Posts subtitle="Tecnologia" title="O guia definitivo sobre o blog">
                    1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti similique eveniet sequi quas laboriosam, impedit dolore ullam!
                </Posts>
                <Posts subtitle="Fotografia" title="Quais as melhores câmeras em 2022">
                    2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti similique eveniet sequi quas laboriosam, impedit dolore ullam!
                </Posts>
                <Posts subtitle="Cinema" title="Os 10 filmes com maior bilheteria de 2022">
                    3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti similique eveniet sequi quas laboriosam, impedit dolore ullam!
                </Posts>
            </div>
        </main>
    )
}