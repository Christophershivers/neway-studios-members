<script >
    import { page } from '$app/stores';
    import {client} from '$lib/pocketbase'
    import {onMount} from 'svelte'
    import ProjectStatus from '$lib/components/uiComponents/projectstatus.svelte'
    import Comment from '$lib/components/uiComponents/comment.svelte'
    import Comments from '$lib/components/uiComponents/comments.svelte'
    import {Button} from '$lib/components/ui/button/index'
    import * as Dialog from '$lib/components/ui/dialog/index'
    import { deserialize } from '$app/forms';
    import {EmbeddedCheckout} from 'svelte-stripe'
    import { PUBLIC_STRIPE_PK } from '$env/static/public';
    import {loadStripe} from '@stripe/stripe-js'

    export let data
    let isDone = true
    let isSent = false
    let stripe = null
    let clientSecrets

    onMount(async() =>{
        isDone = false
        stripe = await loadStripe(PUBLIC_STRIPE_PK)
    })

    const sumbit = async (e) =>{
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        formData.append("projectid", data.project.id)
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        })

        const result = deserialize(await response.text())
        console.log(result)
        

        if (response.ok){
            clientSecrets = result.data.clientSecret
            isSent = true
        }
    }
</script>
{#if isDone}
    <div class="h-[200px] grid justify-center items-center"><wa-spinner style="font-size: 3rem;"></wa-spinner></div>
{:else}
    <ProjectStatus projectStatus={data.project.status}/>
    <div class="mt-14 ">
        <div class="flex mx-14 mb-3">
            <h1 class="flex justify-end font-bold text-2xl basis-3/5 ">{data.project.projectname}</h1>
            <div class="basis-2/5 flex justify-end">
                {#if data.project.isdepositpaid}
                    <form method="POST" action="?/pay" on:submit={sumbit} >
                        <Button class=" " type="submit">Pay Now</Button>
                    </form>
                {:else}
                    <form method="POST" action="?/pay" on:submit={sumbit} >
                        <Button class=" " type="submit">Pay Deposit</Button>
                    </form>
                {/if}
            </div>
            
        </div>
        <div class="sm:mx-14">
            <iframe src="https://www.youtube.com/embed/reC_ROovHhk?si=A2EkjZ3rI_BrkW4g" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                class="aspect-video	w-[100%]" 
                allowfullscreen>
            </iframe>
        </div>
    </div>
    <div class="mt-7"><Comments projects={data.comments}/></div>
    <Comment userid={data.profile.id}/>
{/if}

<Dialog.Root bind:open={isSent}>
  <Dialog.Content class="sm:max-w-[425px]">
    <div><EmbeddedCheckout {stripe} clientSecret={clientSecrets}/></div>
  </Dialog.Content>
</Dialog.Root>