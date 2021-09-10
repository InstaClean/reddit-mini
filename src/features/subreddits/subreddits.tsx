import { useAppDispatch } from "../../app/hooks"

import { loadArticles } from "../articles/articleSlice"

export const Subreddits = () => {

    const dispatch = useAppDispatch()
    return (
        <div className="subreddits" >
            
                <button type="button" onClick={() => dispatch(loadArticles("popular"))}>r/Popular</button>
                <button type="button" onClick={() => dispatch(loadArticles("cryptocurrency"))}>r/cryptoCurrency</button>
                <button type="button" onClick={() => dispatch(loadArticles("pics"))}>r/pics</button>
                <button type="button" onClick={() => dispatch(loadArticles("news"))}>r/news</button>
                <button type="button" onClick={() => dispatch(loadArticles("memes"))}>r/memes</button>
            
        </div>

    )
}