
import Link from "next/link";
import PostsApi from "../pages/PostsApi";
import PostsList from "./PostsList";
import Footer from "./Footer";
const NavBar = (props) => {
    return (
        <>
            <nav class="fixed top-0 z-50 w-full bg-sky-500  ">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-700 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://webled.online" class="flex ml-2 md:mr-24">
                                <span class="self-center text-xl font-semibold sm:text-2xl amber-50space-nowrap dark:text-amber-50">WEBLED</span>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3">
                                <div>
                                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>
                                <div class="z-50 hidden my-4 text-base list-none bg- sky-500 divide-y  rounded shadow " id="dropdown-user">
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-gray-900 dark:text-amber-50" role="none">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0  " aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-sky-500">
                    <ul class="space-y-2 font-medium">
                        <Link href='/user1'>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User One</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user2'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Two</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user3'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3"> User Three</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user4'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Four</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user5'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Five</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user6'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Six</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user7'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Seven</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user8'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Eight</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user9'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Nine</span>
                            </a>
                        </li>
                        </Link>
                        <Link href='/user10'>
                        <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-sky-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-amber-50 group-hover:text-amber-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">User Ten</span>
                            </a>
                        </li>
                        </Link>
                    </ul>
                </div>
            </aside>

            <div class="p-4 sm:ml-64">
                <div class="p-4  mt-14">
                    <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                        {props.ch}
                    </div>
                </div>
            </div>

        </>
    )
}
export default NavBar;