<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
 
  let count = [21,2,3,4,5,6,7];
</script>
<div class="flex ">
  <Sidebar></Sidebar>

  <div class=" w-full ml-80 p-20 bg-[#e7edf9]">
    <Breadcrumb aria-label="Solid bg-sky-900 breadcrumb example" color= "red"solid>
      <BreadcrumbItem href="/dashboard" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/contact">Contact</BreadcrumbItem>
    </Breadcrumb>

    <div class=" mt-20 bg-white p-10">
        <h1 class="ml-2 text-2xl font-semibold">Contact</h1>

        <div class="grid gap-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5">
            {#each count as haha}
            <div class="w-[95%] md:mx-auto sm:mx-36">
                <div class="max-w-sm mb-5 rounded-lg ">
                    <div class="p-5 mt-3 bg-white border border-gray-200 shadow-md">
                        
                        <a href="ss">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Name</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">087741174222</p>
                    </div>
                </div>
            </div>
        {/each}
        </div>
    </div>
  </div>
</div>