import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    id: '',
    access_token: '',
    isAdmin: false,
    city: '',
    refresh_token: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name = '', email = '', phone = '', address = '', avatar = '', _id = '', access_token = '', isAdmin, city = '', refresh_token = '' } = action.payload
            state.name = name;
            state.email = email;
            state.phone = phone;
            state.address = address;
            state.avatar = avatar;
            state.id = _id;
            state.access_token = access_token;
            state.isAdmin = isAdmin;
            state.city = city;
            state.refresh_token = refresh_token;

        },
        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.address = '';
            state.avatar = '';
            state.id = '';
            state.access_token = '';
            state.isAdmin = false;
            state.city = '';
            state.refresh_token = ''
        },
    },
})

export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer