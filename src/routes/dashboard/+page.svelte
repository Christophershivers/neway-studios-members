<script lang="ts">
    import {currentUser, client} from '$lib/pocketbase'
    import {onMount} from 'svelte'
    import {Button} from "$lib/components/ui/button";

    let isDone = true

    type project = {
        id: string;
        projectname: string;
        cost: string;
        description: string;
        isdepositpaid: boolean;
    };
    
    let projects: project[] =[
       
    ] 

    let tests = [0, 1, 2, 3]
    
    let count = 0;
    $: numbers = Array.from({ length: count }, (_, i) => i + 1);
    
    onMount(async () =>{
        const userid = $currentUser?.id
        projects = await client.collection('projects').getFullList({filter: `userid="${userid}"` })

        

        function formatMoney(object: project[]){

            object.forEach(element => {
                let value = Number(element.cost)
                if(value >= 1000000000000){
                    element.cost = (value/1000000000000).toFixed(2) + 'T'
                }else if(value >= 1000000000){
                    element.cost = (value/1000000000).toFixed(2) + 'B' 
                }else if(value >= 1000000){
                    element.cost = (value/1000000).toFixed(2) + 'M'
                }else if (value >= 1000){
                    element.cost = (value/1000).toFixed(2) + 'K'
                }
            });
            

            
        }

        console.log(formatMoney(projects))
        isDone = false
    })


    const counting = () =>{
        count = count + 1
    }

    
    

    
    
</script>



<div class=" sm:mx-14 mt- rounded-lg mb-14">
    <dl class="mx-auto grid grid-cols-1 gap-2  sm:grid-cols-2 lg:grid-cols-4 rounded-full ">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Revenue</dt>
          <dd class="text-xs font-medium text-gray-700">+4.75%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$405,091.00</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Overdue invoices</dt>
          <dd class="text-xs font-medium text-rose-600">+54.02%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$12,787.00</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Outstanding invoices</dt>
          <dd class="text-xs font-medium text-gray-700">-1.39%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$245,988.00</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 rounded-lg border  border-slate-200">
          <dt class="text-sm font-medium leading-6 text-gray-500">Expenses</dt>
          <dd class="text-xs font-medium text-rose-600">+10.18%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$30,156.00</dd>
        </div>
      </dl>
</div>
<h1 class="sm:ml-14 font-bold text-4xl mb-5">Campaigns</h1>
{#if isDone}
    <div class="h-[200px] grid justify-center items-center"><wa-spinner style="font-size: 3rem;"></wa-spinner></div>
    
{:else}
    {#each projects as project}
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
{/each}
{/if}
<div>
    {#each numbers as number}
        <div>
            <input />
        </div>
    {/each}
</div>