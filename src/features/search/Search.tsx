
import { useDispatch } from "react-redux"

export const Search = () => {

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    
        
      }
    return (
        <div id="search">
            <label htmlFor="text" />
            <input type="text" id="text" />
            <label htmlFor="submit" />
            <input type="submit" id="submit" onSubmit={handleSubmit} value=""/>
        </div>
    )
}