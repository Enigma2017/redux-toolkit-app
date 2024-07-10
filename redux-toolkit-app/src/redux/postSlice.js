import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
    },
});

export const { addPost } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
