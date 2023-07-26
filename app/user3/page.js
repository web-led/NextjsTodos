"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "../componants/NavBar";
const UserThree = (props) => {
    const api_url = 'https://jsonplaceholder.typicode.com/todos';
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, [])

    const y = data.map((data) => {
        if(data.userId === 3){
            return (
                <div class=" rounded bg-sky-100  h-auto  shadow-lg ">
                    <h2 className="p-2 font-extralight text-md text-gray-900">User ID : {data.userId}</h2>
                    <h1 className="p-3 font-bold  text-lg text-gray-900 text-center">
                        {data.title}
                    </h1>
                    <div className="flex justify-around">
                            <button type="button" class="text-sky-700 hover:text-amber-50 border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-amber-50 dark:hover:bg-sky-500 ">From User {data.userId}</button>
                    </div>
                </div>
            )
        }
    })
    return (
        <>
            <NavBar ch={y}/>
        </>
    )
}
export default UserThree;