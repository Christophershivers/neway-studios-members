<script lang="ts">
    import {client, currentUser} from '$lib/pocketbase'
    import { Input } from "$lib/components/ui/input/index.js";
    import {Button} from "$lib/components/ui/button";
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte'

    let username: string
    let email: string
    let firstName: string
    let lastName: string
    let password: string

    onMount(()=>{
        if($currentUser){
            const replaceState = true
            goto('/', {replaceState})
        }
    })

    const submit = async () =>{
        const data = {
            "username": username,
            "email": email,
            "password": password,
            "passwordConfirm": password,
            "emailVisibility": true,
            "firstname": firstName,
            "lastname": lastName
        }

        const record = await client.collection('users').create(data)
        
        const replaceState = true
        goto('/login', {replaceState})
    }
</script>

<div class="h-[90vh] grid sm:justify-center items-center">
    <div class="flex flex-col sm:items-center">
        <div class="flex flex-col gap-y-4 bg-white p-[30px] rounded-lg shadow-md">
            <div class="flex justify-center"><h1 class="text-4xl font-bold ">Sign Up</h1></div>
            <div class="">
                <div class="grid  sm:grid-cols-2 gap-2">
                    <Input placeholder="first name" class="min-w-full" bind:value={firstName}/>
                    <Input placeholder="last name" class="" bind:value={lastName}/>
                    <Input placeholder="email" class="" bind:value={email}/>
                    <Input placeholder="username" class="" bind:value={username}/>
                    <Input placeholder="password" class="" bind:value={password}/>
                    <Input placeholder="password" class="" bind:value={password}/>
                </div>
                
            </div>
            <Button class="w-[100%]" on:click={submit}>Signup</Button>
        </div>
        <div class="mt-2 flex justify-center">
            <p >if you already have an account you can log in <a href="/login" class="text-[#f03a1f] font-bold">here</a></p>
        </div>
        
    </div>
</div>