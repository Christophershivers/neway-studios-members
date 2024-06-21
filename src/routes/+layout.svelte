<script lang="ts">
    import { page } from '$app/stores';
    import "../app.css";
    import * as Avatar from "$lib/components/ui/avatar";
    import {Button} from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { client, currentUser } from "$lib/pocketbase";
    import { goto, replaceState } from '$app/navigation';

    $: url = $page.url.pathname
    console.log(url)
    const logout = () =>{
        client.authStore.clear()
        const replaceState = true
        goto('/login', {replaceState})
    }

    //console.log($currentUser?.firstname[0])
    $: isActive = (path: string) => url === path;
</script>
<style>
    .active{
        color: #F03A1F;
    }
</style>
<div>
    current path: {url}
</div>
<div class="h-[90px] bg-white shadow-sm">
    <div class="flex w-full items-center h-full justify-between px-14">
        <div class="">
            <img src="/IMG-1715.PNG" width="100px" alt="logo">
        </div>
        <div class="flex gap-x-8 nav-desktop">
            <a href="/" class:active="{isActive('/')}">Home</a>
            <a href="/dashboard" class:active="{isActive('/dashboard')}">Dashboard</a>
            <a href="/campaigns" class:active="{isActive('/campaigns')}">Campaigns</a>
            <a href="/schedule" class:active="{isActive('/schedule')}">Schedule Campaign</a>
            <a href="/support" class:active="{isActive('/support')}">Support</a>
        </div>
        <div class="nav-desktop">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Avatar.Root>
                        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                        <!--<Avatar.Fallback>{$currentUser?.firstname[0]}{$currentUser?.lastname[0]}</Avatar.Fallback>-->
                    </Avatar.Root>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Group>
                    <DropdownMenu.Separator />
                    <a href="/dashboard"><DropdownMenu.Item>Account Settings</DropdownMenu.Item></a>
                    <div>
                        <button on:click={logout} class="w-full"><DropdownMenu.Item class="">Logout</DropdownMenu.Item></button>
                    </div>
                    
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
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
                    <a href="/" class:active="{isActive('/')}"><DropdownMenu.Item>Home</DropdownMenu.Item></a>
                    <a href="/dashboard" class:active="{isActive('/dashboard')}"><DropdownMenu.Item>Dashboard</DropdownMenu.Item></a>
                    <a href="/campaigns" class:active="{isActive('/campaigns')}"><DropdownMenu.Item>Campaigns</DropdownMenu.Item></a>
                    <a href="/schedule" class:active="{isActive('/schedule')}"><DropdownMenu.Item>Schedule Campaign</DropdownMenu.Item></a>
                    <a href="/support" class:active="{isActive('/support')}"><DropdownMenu.Item>Support</DropdownMenu.Item></a>
                    <DropdownMenu.Separator />
                    <a href="/dashboard"><DropdownMenu.Item>Account Settings</DropdownMenu.Item></a>
                    <div >
                        <button on:click={logout} class="w-full"><DropdownMenu.Item class="">Logout</DropdownMenu.Item></button>
                    </div>
                    
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</div>
<slot ></slot>