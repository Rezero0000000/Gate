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
  
    <div class=" w-full h-full ml-80 p-20 bg-[#e7edf9]">
      <Breadcrumb aria-label="Solid bg-sky-900 breadcrumb example" color= "red"solid>
        <BreadcrumbItem href="/dashboard" home>Home</BreadcrumbItem>
        <BreadcrumbItem href="/contact">Contact</BreadcrumbItem>
        <BreadcrumbItem href="/send">Edit</BreadcrumbItem>
      </Breadcrumb>
  
      <div class=" mt-16 bg-white pt-10 px-10 pb-28">
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
                <Button  on:click={editContact(contact.id)} color="blue">Send</Button>
              </form>
      </div>
    </div>
  </div>