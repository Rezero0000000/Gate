<script>
    export let contacts = [];
    import Sidebar from "../../components/Sidebar.svelte";
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    import { Label, Input } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { Textarea } from 'flowbite-svelte';
    import axios from 'axios';
    async function submitData(event) {
        try {
            event.preventDefault()
            const message = document.getElementById("message").value;
        const target = document.getElementById("target").value;
        const image = document.getElementById("image").files[0];

        const formData = new FormData();
        formData.append("caption", message);
        formData.append("target", target);
        formData.append("image", image);

        const response = await axios.post('/send-media', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        } catch (error) {
            console.error(error);
        }
    }

    let textareaprops = {
      id: 'message',
      name: 'message',
      label: 'Your message',
      rows: 4,
      placeholder: 'Leave a comment...'
    };
    
    let count = [21,2,3,4,5,6,7];
  </script>



<div class="flex ">
  <Sidebar></Sidebar>

  <div class=" w-full ml-30 p-14 bg-[#F9FAFB]">
    <Breadcrumb aria-label=" shadow-lg  Solid bg-sky-900 breadcrumb example" color= "red"solid>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    </Breadcrumb>
    <div class="bg-white mt-10 p-10 shadow-lg ">
      <h1 class="ml-5 text-xl">Devices</h1>
      

      <div class=" mt-10 bg-white  px-10 pb-28">
        <div class="flex">
          <a href="/send">Message text</a>
          <a href="/send-media" class="ml-10">Message Media</a>
          <a href="/send-button" class="ml-10">Message Button</a>
        </div>
      
        <div class="">
            <form action="" class="flex mt-20">
              <div class="w-96 mr-20">
                <div class="mb-6">
                  <Label for="default-input" class="block mb-2">Device</Label>
                  <Input id="default-input" placeholder="Default input" />
                </div>
                <div class="mb-6">
                  <label for="target" class="block text-sm font-medium text-gray-700">Select an option</label>
                  <select id="target" name="target" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    {#each contacts as contact }
                      
                        <option value="{contact.phoneNumber}">{contact.name}</option>
                    {/each}
                   
                  </select>
                </div>
              </div>
              <div>
                  <Label for="image" class="block mb-2">Image</Label>
                  <input type="file" id="image" accept="image/jpeg, image/png">
              </div>
              <div class="w-full">
                <Label for="message" class="block mb-2">Description</Label>
                <Textarea {...textareaprops} />
                <Button  on:click={submitData} color="blue">Send</Button>
              </div>
            </form>
        </div>
    </div>


    </div>
  </div>
</div>





