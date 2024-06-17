import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import PocketBase from 'pocketbase';
//import {DB_URL} from '$env/static/private'

export const pb = new PocketBase('DB_URL')

export const user = writable(pb.authStore.model);


pb.authStore.onChange((auth) =>{
    console.log('auth changed', auth)
    user.set(pb.authStore.model)
})