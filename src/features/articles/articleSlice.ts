/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface articleData {
    title: string
    votes: number
    media: string
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
            state.articles = action.payload.data.children
          })
    }

});

export const { updateTerm, search } = articleSlice.actions;

export const selectArticles = (state: RootState) => state.articles.articles
export const selectFilteredArticles = (state: RootState) => state.articles.articles

export default articleSlice.reducer