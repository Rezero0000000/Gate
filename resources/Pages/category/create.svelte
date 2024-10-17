<script>
    import Navbar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";
    import axios from 'axios';

    async function submitData(event) {
    try {

        event.preventDefault()
        const name = document.getElementById("name").value;
        const slug = document.getElementById("slug").value;

        const response = await axios.post('/category/create', {
            title: name,
            slug: slug
        });

        console.log(response)

    } catch (error) {
        console.error(error);
    }
    }
</script>

<Navbar></Navbar>
<main class="px-5 overflow-hidden sm:px-10 md:px-28 lg:px-32">
<div class="px-2  mt-20 sm:px-20 sm:px-40 mb-[315px]">
    <h1 class="pb-20 text-3xl font-semibold text-center">Create Category</h1>
    <form class="w-full xl:ml-[27rem] lg:ml-60 this-form">
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
            <input type="text" id="name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" >
            <!-- // error
            <p class="text-sm text-red-600">dd</p> -->
        </div>
        <div class="mb-6">
            <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
            <input type="text" id="slug" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="slug">
        </div>
        <button  on:click={submitData} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>                             
</div>
</main>
<Footer></Footer>
