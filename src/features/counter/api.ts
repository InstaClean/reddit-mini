export const getPopular = async () => {
    const request = await fetch('https://www.reddit.com/r/popular.json')
    const response = await request.json()

    return(response)
}

export default getPopular