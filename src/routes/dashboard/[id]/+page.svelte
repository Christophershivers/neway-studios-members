<script >
    import { page } from '$app/stores';
    import {client} from '$lib/pocketbase'
    import {onMount} from 'svelte'
    import ProjectStatus from '$lib/components/uiComponents/projectstatus.svelte'
    import Comment from '$lib/components/uiComponents/comment.svelte'
    import Comments from '$lib/components/uiComponents/comments.svelte'

    export let data

    let isDone = true

    const status = {
        step1: 'Pre-production',
        step2: 'Production',
        step3: 'Post-production',
        step4: 'Review',
        step5: 'Done',
    }

    onMount(async() =>{
        isDone = false
    })
</script>
{#if isDone}
    <div class="h-[200px] grid justify-center items-center"><wa-spinner style="font-size: 3rem;"></wa-spinner></div>
{:else}
    <ProjectStatus projectStatus={data.project.status}/>
    <div class="mt-14">
        <h1 class="flex justify-center font-bold text-2xl">{data.project.projectname}</h1>
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
    <Comment/>
{/if}
