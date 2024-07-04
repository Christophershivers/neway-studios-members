<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import {Button} from "$lib/components/ui/button";
    
</script>

<div class="h-[90vh] grid sm:justify-center items-center">
    <div class="flex flex-col sm:items-center">
        <form method="POST" action="?/register">
            <div class="flex flex-col gap-y-4 bg-white p-[30px] rounded-lg shadow-md">
                <div class="flex justify-center"><h1 class="text-4xl font-bold ">Sign Up</h1></div>
                <div class="">
                    <div class="grid  sm:grid-cols-2 gap-2">
                        <Input placeholder="first name" class="min-w-full" name="firstName"/>
                        <Input placeholder="last name" class="" name="lastName"/>
                        <Input placeholder="email" class="" name="email"/>
                        <Input placeholder="username" class="" name="username"/>
                        <Input placeholder="password" class="" name="password"/>
                        <Input placeholder="password" class="" name="passwordConfirm"/>
                    </div>        
                </div>
                <Button class="w-[100%]" type="submit">Signup</Button>
            </div>
        </form>
        <div class="mt-2 flex justify-center">
            <p >if you already have an account you can log in <a href="/login" class="text-[#f03a1f] font-bold">here</a></p>
        </div>
            
    </div>
</div>

