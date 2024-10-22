<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';
</script>

<div class="flex ">
  <Sidebar></Sidebar>

  <div class=" w-full ml-80 p-20 bg-[#e7edf9]">
    <Breadcrumb aria-label="Solid bg-sky-900 breadcrumb example" color= "red"solid>
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    </Breadcrumb>

    <div class="flex mt-20 ">
       <Card href="/cards" class="flex flex-row  items-center">
        <svg class="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
        </svg>
        
        <div class="ml-5">
          <p>CONTACT NUMBER</p>
          <p class="text-black text-3xl font-medium mt-1">0</p>
          <p class="text-black text-sm mt-1">Saved Number</p>
        </div>
      </Card>
    
      <Card href="/cards" class="flex flex-row  items-center mx-5">
        <svg class="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
        </svg>
        
        
        <div class="ml-5">
          <p>DEVICES</p>
          <p class="text-black text-3xl font-medium mt-1">0</p>
          <p class="text-black text-sm mt-1">Registered devices</p>
        </div>
      </Card>

      <Card href="/cards" class="flex flex-row  items-center">
        <svg class="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
        </svg>
        
        <div class="ml-5">
          <p>SCHEDULE MESSAGE</p>
          <p class="text-black text-sm mt-1">Pending: 0</p>
          <p class="text-black text-sm mt-1">Failed: 0</p>
          <p class="text-black text-sm mt-1">Sent: 0</p>
        </div>
      </Card>
    </div>
    
    <div class="bg-white mt-16 p-10">
      <h1 class="ml-5 text-xl">Devices</h1>
      <Button size="sm" class="ml-5 mt-3" color="blue">+ Add New Devices</Button>

          
    <Table class="mt-10">
      <TableHead>
        <TableHeadCell>Product name</TableHeadCell>
        <TableHeadCell>Color</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow>
          <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
          <TableBodyCell>Sliver</TableBodyCell>
          <TableBodyCell>Laptop</TableBodyCell>
          <TableBodyCell>$2999</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
          <TableBodyCell>White</TableBodyCell>
          <TableBodyCell>Laptop PC</TableBodyCell>
          <TableBodyCell>$1999</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Magic Mouse 2</TableBodyCell>
          <TableBodyCell>Black</TableBodyCell>
          <TableBodyCell>Accessories</TableBodyCell>
          <TableBodyCell>$99</TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
    </div>


  </div>
</div>