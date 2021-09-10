import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { search } from "./articleSlice"
import { selectArticles, selectFilteredArticles } from "./articleSlice"
import { ArticleTile } from "../articles/Tile"
import { shallowEqual } from "react-redux"

export const Articles = () => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles, shallowEqual)
    const filteredArticles = useAppSelector(selectFilteredArticles)




    return (
        <div className="Articles">
            {articles.map(article => <ArticleTile   key={article.id}
                                                    title={article.title}
                                                    ups={article.ups}/>)}
        </div>
    )
}