<script lang="ts">
 import {onMount} from 'svelte'
    import {Button} from "$lib/components/ui/button";

    let isDone = true
    export let data
    
    onMount(async () =>{
        isDone = false
    })
</script>



<div class=" sm:mx-14 mt- rounded-lg mb-14">
    <dl class="mx-auto grid grid-cols-1 gap-2  sm:grid-cols-2 lg:grid-cols-4 rounded-full ">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Total Campaigns</dt>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{data.campaigns}</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Open Campigns</dt>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$12,787.00</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Money Spent</dt>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">${data.costToString}</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Open Deposits</dt>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{data.openDeposits}</dd>
        </div>
      </dl>
</div>
<h1 class="sm:ml-14 font-bold text-4xl mb-5">Campaigns</h1>
{#if isDone}
    <div class="h-[200px] grid justify-center items-center"><wa-spinner style="font-size: 3rem;"></wa-spinner></div>
    
{:else}
    {#each data.projects as project}
    <a href="/dashboard/{project.id}">
        <div class=" rounded-lg border  border-slate-200 py-5 px-2 bg-white sm:mx-14 mb-3">
            <div class="flex justify-between items-center px-3">
                <div class=" basis-1/3 max-w-[126px] sm:max-w-[352px]">
                    <h3 class="font-bold truncate">{project.projectname}</h3>
                </div>
                <div class="basis-2/3 text-center">
                    <h3 class="font-bold">${project.cost}</h3> 
                </div>
                <div class="basis-1/3 text-end">
                    <h3 class="font-bold">{#if project.isdepositpaid}
                        <i class="fa-regular fa-check mr-12"></i>
                    {:else}
                        <Button>Pay Deposit</Button>
                    {/if}</h3> 
                </div>
            </div>
        </div>
    </a>
{/each}
{/if}