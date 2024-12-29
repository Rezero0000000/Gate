<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
</script>

<div class="flex ">
  <Sidebar></Sidebar>

  <div class=" w-full ml-30 p-14 bg-[#F9FAFB]">
    <Breadcrumb aria-label=" shadow-lg  Solid bg-sky-900 breadcrumb example" color= "red"solid>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    </Breadcrumb>

    <div class="flex mt-10 ">
       <Card href="/cards" class="flex flex-row  justify-between">
        <svg xmlns="http://www.w3.org/2000/svg"    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 mb-12">
          <path stroke-linecap="round" width="24" height="24"  stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        <div class="ml-5 flex flex-col justify-end ">
          <div class=" text-right">CONTACT NUMBER</div>
          <div class="text-black   text-3xl font-medium mt-1 text-right">0</div>
          <p class="text-black text-sm mt-1 text-right">Saved Number</p>
        </div>
      </Card>
      
      
      <Card href="/cards" class="flex flex-row  justify-between mx-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 mb-11">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        
        <div class="ml-5 flex flex-col justify-end ">
          <div class=" text-right">DEVICES</div>
          <div class="text-black text-3xl font-medium mt-1 text-right">0</div>
          <p class="text-black text-sm mt-1 text-right">Registered devices</p>
        </div>
      </Card>

      <Card href="/cards" >
        <div class="flex flex-row justify-between ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 mb-12">
            <path  width="24" height="24" stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          <div class="ml-5">
            <p class="text-right ">SCHEDULE MESSAGE</p>
          </div>
        </div>
        <div class="flex-row justify-between flex mx-7">
          <p class="text-black text-sm mt-1 text-right">Pending: 0</p>
          <p class="text-black text-sm mt-1 text-right">Failed: 0</p>
          <p class="text-black text-sm mt-1 text-right">Sent: 0</p>
        </div>
      </Card>
    </div>
    
    <div class="bg-white mt-10 p-10 shadow-lg ">
      <h1 class="ml-5 text-xl">Devices</h1>
      
    <div class="mt-10">
      <button class="rounded mb-5 border border-slate-300 py-1 px-5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <p>Add New Device</p>
      </button>     
      <Table>
        <TableHead>
          <TableHeadCell>Number</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            <TableBodyCell>087741174222</TableBodyCell>
            <TableBodyCell>Active</TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>
    </div>
  </div>
</div>