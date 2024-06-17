import type { Action, Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({cookies}) =>{
    const user = cookies.get('session')
    let parsedUser = null

    if(user){
        parsedUser = JSON.parse(user)
    }
     
    console.log(parsedUser)
    return{
        parsedUser
    }
}

const logout: Action = async ({cookies, request}) =>{
    console.log('tap')
    cookies.delete('session', {path: '/'})
}

export const actions: Actions = {logout}