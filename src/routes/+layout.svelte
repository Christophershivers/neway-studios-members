<script lang="ts">
    import { page } from '$app/stores';
    import "../app.css";
    import * as Avatar from "$lib/components/ui/avatar";
    import {Button} from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    $: url = $page?.url?.pathname

    
</script>
<style>

</style>
<div class="h-[90px] bg-white">
    <div class="flex w-full items-center h-full justify-between px-14">
        <div class="">
            <img src="/IMG-1715.PNG" width="100px" alt="logo">
        </div>
        <div class="flex gap-x-8 nav-desktop">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/campaigns">Campaigns</a>
            <a href="/schedule">Schedule Campaign</a>
            <a href="/support">Support</a>
        </div>
        <div class="nav-desktop">
            <Avatar.Root>
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
        </div>
        <div class="nav-mobile">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger><Button variant="ghost"><i class="fa-regular fa-bars"></i></Button></DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Group>
                    <DropdownMenu.Item>
                        <Avatar.Root>
                            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                            <Avatar.Fallback>CN</Avatar.Fallback>
                        </Avatar.Root>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <a href="/"><DropdownMenu.Item>Home</DropdownMenu.Item></a>
                    <a href="/dashboard"><DropdownMenu.Item>Dashboard</DropdownMenu.Item></a>
                    <a href="/campaigns"><DropdownMenu.Item>Campaigns</DropdownMenu.Item></a>
                    <a href="/schedule"><DropdownMenu.Item>Schedule Campaign</DropdownMenu.Item></a>
                    <a href="/support"><DropdownMenu.Item>Support</DropdownMenu.Item></a>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</div>
<slot></slot>