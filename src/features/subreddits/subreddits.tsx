import { useAppDispatch } from "../../app/hooks"

import { loadArticles } from "../articles/articleSlice"

export const Subreddits = () => {

    const dispatch = useAppDispatch()
    return (
        <div className="subreddits" >
            <ul>
                <li><button type="button" onClick={() => dispatch(loadArticles("popular"))}>r/Popular</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("cryptocurrency"))}>r/cryptoCurrency</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("pics"))}>r/pics</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("news"))}>r/news</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("memes"))}>r/memes</button></li>
            </ul>
        </div>

    )
}