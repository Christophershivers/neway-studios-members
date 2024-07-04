<script>
    import { PUBLIC_STRIPE_PK } from '$env/static/public';
    import {loadStripe} from '@stripe/stripe-js'
    import { deserialize } from '$app/forms';
    import {EmbeddedCheckout} from 'svelte-stripe'
    import { onMount } from 'svelte'
    import * as Dialog from '$lib/components/ui/dialog/index'
    import {Button, buttonVariants} from '$lib/components/ui/button/index'
    let stripe = null
    let clientSecrets
    let isSent = false
    $: hov = ''

    onMount(async () =>{
        stripe = await loadStripe(PUBLIC_STRIPE_PK)
    })

    const sumbit = async (e) =>{
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        formData.append("hov", hov)
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

    $: console.log(hov)
</script>

<form method="POST" action="?/pay" on:submit={sumbit} >
    <input name="amount"/>
    <button class={buttonVariants({ variant: "outline" })} on:mouseover={() => hov='hovered'}>pay</button>
</form>

<Dialog.Root bind:open={isSent}>
    <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
    >Edit Profile</Dialog.Trigger
  >
  <Dialog.Content class="sm:max-w-[425px]">
    <div><EmbeddedCheckout {stripe} clientSecret={clientSecrets}/></div>
  </Dialog.Content>
</Dialog.Root>