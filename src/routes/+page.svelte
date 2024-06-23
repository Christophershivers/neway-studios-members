<script lang="ts">
    import {onMount, onDestroy} from 'svelte'
    import {user} from '../stores/user'
    import PocketBase from 'pocketbase';
    import {currentUser} from '$lib/pocketbase'

    export let data

    onMount(async () =>{
       
        
        
        
    })
    
    const submit = (value:any) =>{
        data = value
    }
    $: console.log(data)
</script>

<div class="h-[100vh] grid justify-center items-center">
    <h1 class="font-bold text-5xl">Welcome {$currentUser ? $currentUser.firstname : ' User!!!'}</h1>


    <form >
        <select on:submit={(event) => submit(event?.target?.value)}>
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
        </select>
        <button type="submit">click</button>
    </form>
    
</div>

