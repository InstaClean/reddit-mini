import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { search } from "./articleSlice"
import { selectArticles, selectFilteredArticles } from "./articleSlice"
import { ArticleTile } from "../articles/Tile"

export const Articles = () => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles)
    const filteredArticles = useAppSelector(selectFilteredArticles)

    useEffect(() => {
        console.log("effect")
        console.log(articles[0].data.title)
    }, [articles])


    return (
        <div className="Articles">
            {articles.map(article => <ArticleTile title={article.data.title}/>)}
        </div>
    )
}