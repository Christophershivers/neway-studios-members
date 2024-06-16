import PocketBase from 'pocketbase';
import {DB_URL} from '$env/static/private'
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import {user} from '../../../stores/user'


const client = new PocketBase(DB_URL)

export const POST = async (e: RequestEvent) =>{
    

    
    
    const body = await e.request.json()
    const {username, password} = body

    try{
        const userData = await client.collection('users').authWithPassword(username, password)
        const dat = client.authStore
        
        //user.set(userData)
        console.log(dat.model)
        return new Response(JSON.stringify({ userData, dat}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(err){
        return new Response(JSON.stringify({ error: 'invalid login' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
}


export const GET = async (e: RequestEvent) =>{
    

    try{
        const model = client.authStore.model

        return new Response(JSON.stringify({ model}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(err){
        return new Response(JSON.stringify({ error: 'invalid login' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
}