import {DB_URL} from '$env/static/private'
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (e: RequestEvent) =>{
    
    
    return json({})
}