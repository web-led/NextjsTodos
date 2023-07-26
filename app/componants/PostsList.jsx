"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
const PostsList = (props) => {
    const api_url = 'https://jsonplaceholder.typicode.com/todos';
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, [])

    const y = data.map((data) => {
            return (
                <div class=" rounded bg-sky-100  h-auto  shadow-lg">
                    <h2 className="p-2 font-extralight text-md text-gray-900">User ID : {data.userId}</h2>
                    <h1 className="p-3 font-bold  text-lg text-gray-900 text-center">
                        {data.title}
                    </h1>
                    <div className="flex justify-around">
                        
                            <button type="button" class="text-sky-700 hover:text-amber-50 border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-amber-50 dark:hover:bg-sky-500 ">From User {data.userId}</button>
                    </div>
                </div>
            )
    })

    if (props.number > 10) {
        return (
            <div className=" flex justify-center text-center items-center ">
                <div class="max-w-sm bg-amber-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/12/16/sorry-note-rex.jpg?quality=75&width=1200&auto=webp" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-amber-50">User Id From 1 To 10 Only</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <button  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-50 bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            GoTo All Todos
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                y
            }
        </>
    )
}
export default PostsList;