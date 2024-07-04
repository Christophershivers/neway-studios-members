import Stripe from 'stripe'
import { STRIPE_SK, DB_URL } from '$env/static/private';
import PocketBase from 'pocketbase'


export const handle =  async ({event, resolve})=>{
    event.locals.stripe = new Stripe(STRIPE_SK)
    event.locals.pb = new PocketBase(DB_URL)
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
    
    if(event.locals.pb.authStore.isValid){
        event.locals.user = event.locals.pb.authStore.model;
    }

    const response = await resolve(event)
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({secure: true}))

    return response
}