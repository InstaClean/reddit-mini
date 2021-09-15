
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { search, selectSearchTerm, updateTerm } from "../articles/articleSlice";

export const Search = () => {
    const dispatch = useAppDispatch();
    const term = useAppSelector(selectSearchTerm)


    return (
        <div id="searchBar">
            <label htmlFor="text">Enter Search Query</label>
            <input type="text" id="text" onChange={(e) => dispatch(updateTerm(e.target.value))} value={term}/>
            <label htmlFor="search">Submit Query</label>
            <input type="button" id="search"  onClick={() => dispatch(search())} value="search"/>
        </div>
    )
}