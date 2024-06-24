<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import {client} from '$lib/pocketbase'
    import { page } from '$app/stores';
    import {onMount} from 'svelte'

    $: id = $page.params.id;

    type project = {
        id: string;
        firstname: string;
        lastname: string;
        username: string;
        comment: string;
    };
    
    let projects: project[] =[
       
    ] 
    onMount(async()=>{
        projects = await client.collection('projectcomments').getFullList({filter: `field="${id}"`, expand: 'field2'})

        console.log(projects)
    })

</script>
{#each projects as project}
    <div class="flex items-start gap-4 p-4 rounded-lg transition-colors sm:mx-14 bg-white">
        <Avatar.Avatar class="h-12 w-12 border">
        <Avatar.AvatarImage src="/placeholder-user.jpg" />
        <Avatar.AvatarFallback>CN</Avatar.AvatarFallback>
        </Avatar.Avatar>
        <div class="flex-1 space-y-1">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
            <div class="font-medium">{project.expand.field2.firstname} {project.expand.field2.lastname}</div>
            <div class="text-xs text-muted-foreground">@{project.expand.field2.username}</div>
            </div>
            <div class="text-xs text-muted-foreground">2h</div>
        </div>
        <div class="text-sm leading-relaxed text-muted-foreground">
            {project.comment}
        </div>
        </div>
    </div>
  {/each}