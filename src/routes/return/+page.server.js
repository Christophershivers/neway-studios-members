import { json } from '@sveltejs/kit'

export const load = async ({locals, url}) =>{
    const getURL = url.searchParams.get('session_id')
    const {status} = await getSession(locals, getURL)

    if(status == 'complete'){
        
    }
}



const getSession = async (locals, param) =>{
    const session = await locals.stripe.checkout.sessions.retrieve(param)
    return {
        status: session.status
    }
}