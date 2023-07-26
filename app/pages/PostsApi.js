"use client"
import { useState, useEffect } from "react";
const PostsApi = () => {
    const api_url = 'https://jsonplaceholder.typicode.com/todos';
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, [])
    const x = data.map((data) => {
        return (
            <div class=" rounded bg-gray-50  h-auto  shadow-lg">
                <h2 className="p-2 font-extralight text-md text-gray-900">User ID : {data.userId}</h2>
                <h1 className="p-3 font-bold  text-lg text-gray-900 text-center">
                    {data.title}
                </h1>
                <div className="flex justify-around">
                    <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 ">From User {data.userId}</button>
                </div>
            </div>
        )
    });
    return (
        <>
            {x}
        </>
    )
}
export default PostsApi;