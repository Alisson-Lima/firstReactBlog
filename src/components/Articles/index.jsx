import Posts from "../Posts/"

export default function Articles(){
    return(
        <main className="container">
            <div className="container-posts mt-5">
                <Posts />
                <Posts />
                <Posts />
            </div>
        </main>
    )
}