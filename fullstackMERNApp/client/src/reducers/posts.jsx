// export default (posts = [], action) => {
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return action.payload;
//         case 'CREATE':
//             return [...posts, action.payload];
//         case 'UPDATE':
//         case 'LIKE':
//             return posts.map((post) =>
//                 post._id === action.payload._id ? action.payload : post
//             );
//         case 'DELETE':
//             return posts.filter((post) => post._id !== action.payload);
//         default:
//             return posts;
//     }
// };

import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        fetchAll: (state, action) => action.payload,
        create: (state, action) => [...state, action.payload],
        update: (state, action) =>
            state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            ),
        like: (state, action) =>
            state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            ),
        deletePost: (state, action) =>
            state.filter((post) => post._id !== action.payload),
    },
});

export const { fetchAll, create, update, like, deletePost } = postsSlice.actions;
export default postsSlice.reducer;


