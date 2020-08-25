const initialState = {
    user: {
        username: 'this name',
        user_id: 5,
        profile_pic: 'some picture'
    },
    movies: ['star wars']
}

export function changeUsername(payload){
    return {
        type: "CHANGE_USERNAME",
        payload
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case "CHANGE_USERNAME":
            return {...state, user: {...state.user, username: payload}}
        default:
            return state
    }
}