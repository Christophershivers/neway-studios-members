<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import {Button} from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="h-[90vh] flex justify-center items-center">
    <div class=" w-[550px] ">
        <div class="w-[100%]">
            <form method="POST" action="?/login" class="w-[100%]">
                <Card.Root class="mx-auto max-w-sm">
                    <Card.Header>
                      <Card.Title class="text-2xl">Login</Card.Title>
                      <Card.Description>Enter your email below to login to your account</Card.Description>
                    </Card.Header>
                    <Card.Content>
                      <div class="grid gap-4">
                        <div class="grid gap-2">
                          <Label for="email">Email/Username</Label>
                          <Input id="email" type="email" placeholder="m@example.com" required name="username"/>
                        </div>
                        <div class="grid gap-2">
                          <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a href="##" class="ml-auto inline-block text-sm underline">
                              Forgot your password?
                            </a>
                          </div>
                          <Input id="password" type="password" required  name="password"/>
                        </div>
                        <Button type="submit" class="w-full">Login</Button>
                      </div>
                      <div class="mt-4 text-center text-sm">
                        Don&apos;t have an account?
                        <a href="/signup" class="text-[#f03a1f] font-bold">Sign up</a>
                      </div>
                    </Card.Content>
                </Card.Root>
            </form>
        </div>
    </div>
</div>

