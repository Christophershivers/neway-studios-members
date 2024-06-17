import PocketBase from 'pocketbase';
import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import {DB_URL} from '$env/static/private'

export const load: PageServerLoad = async ({cookies}) =>{
    const cook = cookies.get('session')
    console.log()
}


const login: Action = async ({cookies, request}) =>{
    const client = new PocketBase(DB_URL)
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')

    const user = await client.collection('users').authWithPassword(username, password)

    const firstname = user.record.firstname

    //console.log('user info:', user)

    const expiresIn = 60 * 60 * 24 * 7 * 1000

    const options = {maxAge: expiresIn, httpOnly: true, secure: true, path: '/'}

    const userData = {
        firstname: user.record.firstname,
        lastname: user.record.lastname,
        username: user.record.username
    }

    cookies.set('session', JSON.stringify(userData), options)
    const cook = cookies.get('session')
    console.log(cook)
}

export const actions: Actions = {login}