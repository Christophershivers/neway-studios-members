<script lang="ts">
    //import { client, currentUser} from "../pocketbase";
    import { Input } from "$lib/components/ui/input/index.js";
    import Spinner from "../spinner.svelte";
    import {Button} from "$lib/components/ui/button";
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte'
    import {user, pb} from '../../../stores/user'
    import {client} from '$lib/pocketbase'
    import { cookieSerialize } from "pocketbase";

    let username: string
    let password: string

    onMount(()=>{
        /*if($currentUser){
            const replaceState = true
            goto('/', {replaceState})
        }*/
    })

    const submit = async () =>{
        

        const data = {
            username,
            password
        }

        //const login = await client.collection('users').authWithPassword(username, password)
        //const replaceState = true
        //goto('/', {replaceState})

        /*const fet = await fetch('/api/logout', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        const recdata = await fet.json()
        if(fet.ok){
            

            
            localStorage.setItem('login', recdata.userData.record)
            //console.log(recdata.userData.record)
            console.log(recdata.dat.baseModel)
             
            
            user.set(recdata.userData.record)

            
        }*/

        const login = await client.collection('users').authWithPassword(username, password)
        //const replaceState = true
        //goto('/', {replaceState})

    }

    const logout = () =>{
        //client.authStore.clear()
    }
</script>

<div>
    <div class="h-[90vh] grid sm:justify-center items-center">
        <div class="flex flex-col gap-y-4 bg-white p-[30px] rounded-lg shadow-md   justify-center">
            <div class="flex justify-center"><h1 class="text-4xl font-bold ">Sign Up</h1></div>
            <div class="">
                <div class="grid gap-2">
                    <Input placeholder="username" name="username" bind:value={username} />
                    <Input placeholder="password" name="password" bind:value={password}/>
                </div>
                
            </div>
            <Button class="w-[100%]" type="submit">Login</Button><Button class="w-[100%]" on:click={submit}>Login</Button>
        </div>
    </div>
</div>
