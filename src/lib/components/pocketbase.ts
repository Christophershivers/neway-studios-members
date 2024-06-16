import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

/*export function pocket(url:any){
    const client = new PocketBase(url)

    const currentUser = writable(client.authStore.model)

    client.authStore.onChange((auth) =>{
        console.log('auth changed', auth)
        currentUser.set(client.authStore.model)
    })

    return {client, currentUser}
}*/

const url = 'https://solid-somehow.pockethost.io/'
export const client = new PocketBase(url)

export const currentUser = writable(client.authStore.model)

client.authStore.onChange((auth) =>{
    console.log('auth changed', auth)
    currentUser.set(client.authStore.model)
})