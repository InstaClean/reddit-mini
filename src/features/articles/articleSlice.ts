/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface articleData {
    id: number
    title: string
    ups: number
    media?: string
    isVideo: boolean
}

export interface articleState {
    articles: Array<articleData>,
    filteredArticles: Array<articleData>,
    searchTerm: string
    status: 'idle' | 'loading' | 'failed'
}


const initialState: articleState = {
    articles: [],
    filteredArticles: [],
    searchTerm: "",
    status: 'idle',
}
/**
 * 
 * Returns subreddit page data in .json format
 * 
 * @param {string}  subreddit name of subreddit to be retrieved 
 * 
 * @returns {json} response in json format
 * 
 */
export const loadArticles =  createAsyncThunk(
    'articles/fetchArticles',
    async (subreddit: string) => {
        console.log(subreddit)
        const articles = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

        const response = await articles.json();

        return response
    }
)

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        updateTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        //filter retrieved articles by matching post title with query string
        search: (state) => {
            const find = state.articles.filter(article => article.title.toUpperCase().includes(state.searchTerm.toUpperCase()))
            state.filteredArticles = find
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(loadArticles.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(loadArticles.fulfilled, (state, action) => {
            state.status = 'idle';
            const articleList = action.payload.data.children
            const newArticles = []
            for (let article of articleList) {
                const articleIndex = articleList.indexOf(article)
                if (!articleList[articleIndex].data.stickied) {
                    article.id = articleList[articleIndex].data.id
                    article.title = articleList[articleIndex].data.title
                    article.ups = articleList[articleIndex].data.ups

                    //detect media in article
                    if (articleList[articleList.indexOf(article)].data.is_video && !articleList[articleIndex].data.media.reddit_video.is_gif) {
                        article.media = articleList[articleIndex].data.media.reddit_video.fallback_url
                        article.isVideo = true
                    } else if (articleList[articleIndex].data.url_overridden_by_dest) {
                        article.media = articleList[articleIndex].data.url_overridden_by_dest
                        article.isVideo = false
                    } 
                    newArticles.push(article)
                }
            }
            state.articles = newArticles
            state.filteredArticles = newArticles
          })
    }

});



export const { updateTerm, search } = articleSlice.actions;

export const selectArticles = (state: RootState) => state.articles.articles
export const selectSearchTerm = (state: RootState) => state.articles.searchTerm
export const selectFilteredArticles = (state: RootState) => state.articles.filteredArticles

export default articleSlice.reducer