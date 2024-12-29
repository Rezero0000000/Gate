<script>
  export let contacts = [];
  import Sidebar from "../../components/Sidebar.svelte";
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';
  import axios from "axios";
  function formatPhoneNumber(contact) {
    let phoneNumber = contact.replace(/[^\d]/g, '');
    return `+${phoneNumber}`;
  }

  async function deleteContact (id) {
    try {
        const response = await axios.post(`/contact/del/${id}`);
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
      <h1 class="ml-5 text-xl">Devices</h1>
      
    <div class="mt-10">
      <button class="rounded ml-5 mb-5 border border-slate-300 py-1 px-5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <p>Add New Contact</p>
      </button>     
      <div class="grid gap-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5">
        {#each contacts as contact}

        <div class="w-[95%] md:mx-auto sm:mx-36">
            <div class="max-w-sm mb-5 rounded-lg ">
                <div class="p-5 mt-3 bg-white border border-gray-200 shadow-md">
                    <div>
                      <a href="ss">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{contact.name}</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700">{formatPhoneNumber(contact.phoneNumber)}</p>
                    </div>

                    <div>
                      <a href="/contact/edit/{contact.id}"><Button size="xs" class="mr-2" color="blue">Edit</Button></a>
                      <Button on:click={deleteContact(contact.id)} size="xs" color="red">Delete</Button>
                    </div>
                      </div>
                  </div>
              </div>
            {/each}
          </div>
    </div>
    </div>
  </div>
</div>
