<script >
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { client } from '$lib/pocketbase';

    export let projectStatus
    const statuses = ['Pre-production', 'Production', 'Post-production', 'Review', 'Done'];

    function getStatusIndex(status) {
        return statuses.indexOf(status);
    }

</script>
<nav aria-label="Progress" class="bg-white lg:mx-14">
    <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {#each statuses as status, index}
            <li class="relative md:flex md:flex-1">
                {#if getStatusIndex(projectStatus) > index}
                    <!-- Completed Step -->
                    <a href="#" class="group flex w-full items-center">
                        <span class="flex items-center px-6 py-4 text-sm font-medium">
                            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(240,58,31)] group-hover:bg-[rgb(240,18,0)]">
                                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span class="ml-4 text-sm font-medium text-gray-900">{status}</span>
                        </span>
                    </a>
                {/if}

                {#if getStatusIndex(projectStatus) === index}
                    <!-- Current Step -->
                    <a href="#" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                        <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#f03a1f]">
                            <span class="text-[#f03a1f]">{index + 1}</span>
                        </span>
                        <span class="ml-4 text-sm font-medium text-[#f03a1f]">{status}</span>
                    </a>
                {/if}

                {#if getStatusIndex(projectStatus) < index}
                    <!-- Upcoming Step -->
                    <a href="#" class="group flex items-center">
                        <span class="flex items-center px-6 py-4 text-sm font-medium">
                            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                <span class="text-gray-500 group-hover:text-gray-900">{index + 1}</span>
                            </span>
                            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{status}</span>
                        </span>
                    </a>
                {/if}

                <!-- Arrow separator for lg screens and up -->
                {#if index < statuses.length - 1}
                    <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                        <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                            <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
                        </svg>
                    </div>
                {/if}
            </li>
        {/each}
    </ol>
</nav>