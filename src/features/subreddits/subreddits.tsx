import { useAppDispatch } from "../../app/hooks"

import { loadArticles } from "../articles/articleSlice"

export const Subreddits = () => {

    const dispatch = useAppDispatch()
    return (
        <div className="subreddits" >
            <ul>
                <li><button type="button" onClick={() => dispatch(loadArticles("funnyvideos"))}>r/funnyvideos</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("oldschoolcool"))}>r/oldschoolcool</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("pics"))}>r/pics</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("thewaywewere"))}>r/thewaywewere</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("memes"))}>r/memes</button></li>
                <li><button type="button" onClick={() => dispatch(loadArticles("astrophotography"))}>r/astrophotography</button></li>
            </ul>
            <div className="return">
                <a href="#search">
                    <button>
                        <span>Back to Top</span>
                    </button>
                </a>
            </div>
        </div>

    )
}