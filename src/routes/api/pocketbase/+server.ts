import PocketBase from 'pocketbase';
import {DB_URL} from '$env/static/private'
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import {user} from '../../../stores/user'

export const GET = async (e: RequestEvent) =>{
    const client = new PocketBase(DB_URL)
    

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