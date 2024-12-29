<script>
    export let contact = [];
    
    let phoneNumber = contact.phoneNumber.replace(/[^\d]/g, '');

    import Sidebar from "../../components/Sidebar.svelte";
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    import { Label, Input } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import axios from "axios";
  
    async function editContact (id) {
      try {
        const name = document.getElementById("name").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const response = await axios.post(`/contact/edit/${id}`, {
          name: name,
          phoneNumber: phoneNumber
        });
      } catch (error) {
          console.error(error);
      }
    }
  </script>
    

<div class="flex ">
  <Sidebar></Sidebar>
  <div class=" w-full ml-30 p-14 bg-[#F9FAFB]">
    <Breadcrumb aria-label=" shadow-lg  Solid bg-sky-900 breadcrumb example" color= "red"solid>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    </Breadcrumb>
    <div class="bg-white mt-10 p-10 shadow-lg ">
      <h1 class="ml-5 text-xl">Edit Contact</h1>
      <div class="  bg-white pt-10 px-10 pb-28">
              <form action="" class=" ">
                <div class="w-96 mr-20">
                  <div class="mb-6">
                    <Label for="name" class="block mb-2">Name</Label>
                    <Input id="name" value="{contact.name}" placeholder="Name" />
                  </div>
                  <div class="mb-6">
                    <Label for="phoneNumber" class="block mb-2">Phone Number</Label>
                    <Input id="phoneNumber" value="{phoneNumber}" placeholder="Phone Number" />
                  </div>
                </div>
                <Button  on:click={editContact(contact.id)} class="mr-2 bg-white outline outline-1  text-black hover:text-white hover:bg-[#3c84f4]">Send</Button>
                <a href="/contact"><Button  class="mr-2 bg-white outline outline-1  text-black hover:text-white hover:bg-black" >Back</Button></a>
              </form>
      </div>
    </div>
  </div>
</div>


