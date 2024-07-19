<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import {Button} from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    
</script>

<div class="h-[90vh] grid sm:justify-center items-center">
    <div class="flex flex-col sm:items-center">
        <form method="POST" action="?/register">
            <Card.Root class="mx-auto max-w-sm">
                <Card.Header>
                  <Card.Title class="text-xl">Sign Up</Card.Title>
                  <Card.Description>Enter your information to create an account</Card.Description>
                </Card.Header>
                <Card.Content>
                  <div class="grid gap-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="grid gap-2">
                        <Label for="first-name">First name</Label>
                        <Input placeholder="Max" name="firstName"/>
                      </div>
                      <div class="grid gap-2">
                        <Label for="last-name">Last name</Label>
                        <Input placeholder="Robinson" name="lastName" />
                      </div>
                    </div>
                    <div class="grid gap-2">
                      <Label for="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" required  name="email"/>
                    </div>
                    <div class="grid gap-2">
                        <Label for="username">Username</Label>
                        <Input  required  name="username"/>
                      </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="grid gap-2">
                          <Label for="passowrd">Password</Label>
                          <Input type="password" required name="password"/>
                        </div>
                        <div class="grid gap-2">
                          <Label for="password">Confirm Password</Label>
                          <Input type="password" required  name="passwordConfirm"/>
                        </div>
                      </div>
                    <Button type="submit" class="w-full">Create an account</Button>
                  </div>
                  <div class="mt-4 text-center text-sm">
                    Already have an account?
                    <a href="/login" class=" text-[#f03a1f] font-bold"> Sign in </a>
                  </div>
                </Card.Content>
              </Card.Root>
        </form>
    </div>
</div>

