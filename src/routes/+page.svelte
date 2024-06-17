<script lang="ts">
    import {onMount, onDestroy} from 'svelte'
    import {user} from '../stores/user'
    import PocketBase from 'pocketbase';
    import {currentUser} from '$lib/pocketbase'

    export let data

    onMount(async () =>{
       
        
        
        
    })
    
    
</script>

<div class="h-[100vh] grid justify-center items-center">
    <h1 class="font-bold text-5xl">Welcome {$currentUser ? $currentUser.firstname : ' User!!!'}</h1>
    
</div>

