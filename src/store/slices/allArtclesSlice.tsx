import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ApiAuth from '@/api/ApiAuth';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface ArticlesState {
    isLoading: boolean;
    article: any; 
    error: boolean;
    success: boolean;
  }


export const allArticles = createAsyncThunk(
    'articles/allArticles',
    async () => {
        const request = await ApiAuth.get(`/top-headlines?country=ng&apiKey=${apiKey}`);
        const response = await request.data;
        // console.log('res',response?.articles);
        return response?.articles;
    }
);

const articles = createSlice({
    name: 'article',
    initialState: {
        isLoading: false,
        article: [],
        error: false,
        success: false,
    } as ArticlesState,
    extraReducers: (builder) => {
        builder
            .addCase(allArticles.pending, (state) => {
                state.isLoading = true;
                state.article = [];
                state.error = false;
                state.success = false;
            })
            .addCase(allArticles.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.article = action.payload;
                state.error = false;
                state.success = true;
                console.log('payload: ',action.payload);
            })
            .addCase(allArticles.rejected, (state,) => {
                state.isLoading = false;
                state.article = [];
                state.success = false;
            });
    },
    reducers: {}
})

export default articles.reducer;

