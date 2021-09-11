/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Articles } from './Articles';

export interface articleData {
    id: number
    title: string
    ups: number
    media?: string
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
        updateTerm: (state) => {
            const term = (<HTMLInputElement>document.getElementById("search")).value
            state.searchTerm = term
        },
        search: (state) => {
            const find = state.articles.filter(article => article.title.includes(state.searchTerm))
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
                    if (articleList[articleList.indexOf(article)].data.url_overridden_by_dest) {
                        article.media = articleList[articleList.indexOf(article)].data.url_overridden_by_dest
                    } else if (articleList[articleList.indexOf(article)].data.thumbnail !== ("self")) {
                        article.media = articleList[articleList.indexOf(article)].data.thumbnail
                    }
                    newArticles.push(article)
                }
            }
            state.articles = newArticles
          })
    }

});

export const { updateTerm, search } = articleSlice.actions;

export const selectArticles = (state: RootState) => state.articles.articles
export const selectSearchTerm = (state: RootState) => state.articles.searchTerm
export const selectFilteredArticles = (state: RootState) => state.articles.articles

export default articleSlice.reducer