<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import {Button} from "$lib/components/ui/button";
</script>

<div>
    <div class="h-[90vh] grid sm:justify-center items-center">
        <div>
            <form method="POST" action="?/login">
                <div class="flex flex-col gap-y-4 bg-white p-[30px] rounded-lg shadow-md   justify-center">
                    <div class="flex justify-center"><h1 class="text-4xl font-bold ">Login Up</h1></div>
                    <div class="">
                        <div class="grid gap-2">
                            <Input placeholder="username" name="username" />
                            <Input placeholder="password" name="password" />
                        </div>
                        
                    </div>
                    <Button class="w-[100%]" type="submit">Login</Button>
                </div>
            </form>
            <div class="mt-2 flex justify-center">
                <p >if you dont have an account you can sign up <a href="/signup" class="text-[#f03a1f] font-bold">here</a></p>
            </div>
            
        </div>
    </div>
</div>
