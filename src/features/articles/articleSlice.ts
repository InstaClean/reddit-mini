/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Articles } from './Articles';

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
 * loadArticles
 * 
 * returns JSON data of subreddit articles
 * 
 * param: subreddit, name of subreddit to query from
 * 
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
            console.log(articleList)
            const newArticles = []
            for (let article of articleList) {
                if (!articleList[articleList.indexOf(article)].data.stickied) {
                    article.id = articleList[articleList.indexOf(article)].data.id
                    article.title = articleList[articleList.indexOf(article)].data.title
                    article.ups = articleList[articleList.indexOf(article)].data.ups

                    //detect pics in article
                    if (articleList[articleList.indexOf(article)].data.is_video) {
                        article.media = articleList[articleList.indexOf(article)].data.media.reddit_video.fallback_url
                        article.isVideo = true
                    } else if (articleList[articleList.indexOf(article)].data.url_overridden_by_dest) {
                        article.media = articleList[articleList.indexOf(article)].data.url_overridden_by_dest
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