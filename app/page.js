import Image from 'next/image'
import NavBar from './componants/NavBar'
import PostsApi from './pages/PostsApi'
import PostsList from './componants/PostsList'
export default function Home() {
  return (
    <>
    <NavBar  ch={<PostsList />}/>
    </>
  )
}
