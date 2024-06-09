<script lang="ts">
    import "../app.css";
    import * as Avatar from "$lib/components/ui/avatar";
    import {Button} from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
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
                    <DropdownMenu.Item><a href="/">Home</a></DropdownMenu.Item>
                    <DropdownMenu.Item><a href="/dashboard">Dashboard</a></DropdownMenu.Item>
                    <DropdownMenu.Item><a href="/campaigns">Campaigns</a></DropdownMenu.Item>
                    <DropdownMenu.Item><a href="/schedule">Schedule Campaign</a></DropdownMenu.Item>
                    <DropdownMenu.Item><a href="/support">Support</a></DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</div>
<slot></slot>