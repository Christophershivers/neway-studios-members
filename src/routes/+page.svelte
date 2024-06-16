<script lang="ts">
    import {onMount, onDestroy} from 'svelte'
    import {user} from '../stores/user'
    import PocketBase from 'pocketbase';
    import {currentUser} from '$lib/components/pocketbase'

    onMount(async () =>{
        const data = await fetch('/api/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const fetchedData = await data.json()
        console.log(fetchedData)
        user.set(fetchedData.model)
    })
    
    
</script>

<div class="h-[100vh] grid justify-center items-center">
    <h1 class="font-bold text-5xl">Welcome {$user ? $user.firstname : ' User!!!'}</h1>
    
</div>

