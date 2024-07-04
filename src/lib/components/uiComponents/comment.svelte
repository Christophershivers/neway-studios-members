<script lang="ts">
import {client, currentUser} from '$lib/pocketbase'
import { page } from '$app/stores';

$: id = $page.params.id;
let comment = ''
export let userid
const submit = async (event:Event) =>{
    event.preventDefault()

    const data = {
        "field": id,
        "field2": userid,
        "comment": comment
    }

    const record = await client.collection('projectcomments').create(data);
}
</script>

<div class="flex items-start space-x-4 sm:mx-14 mt-3">
    <div class="min-w-0 flex-1 bg-white ">
      <form method="POST" action="?/comment" class="relative" >
        <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea rows="3" name="comment" bind:value={comment} class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..."></textarea>
          <input value={id} name="field" class="hidden"/>
          <input value={userid} name="field2" class="hidden"/>
          <!-- Spacer element to match the height of the toolbar -->
          <div class="py-2" aria-hidden="true">
            <!-- Matches height of button in toolbar (1px border + 36px content height) -->
            <div class="py-px">
              <div class="h-9"></div>
            </div>
          </div>
        </div>
  
        <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
          
          <div class="flex-shrink-0">
            <button type="submit" class="inline-flex items-center rounded-md bg-[rgb(240,58,31)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(240,100,31)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  