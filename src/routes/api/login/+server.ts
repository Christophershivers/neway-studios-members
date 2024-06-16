import { pocket } from "$lib/components/pocketbase";
import {DB_URL} from '$env/static/private'
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (e: RequestEvent) =>{
    const {client, currentUser} = pocket(DB_URL)
    
    return json({currentUser})
}