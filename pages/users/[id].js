import { useRouter } from "next/router";

export default function Page ({ user }) {
  const router = useRouter(); 
  const { id } = router.query;  
  return (
    <div>
      <h1>Users</h1>
      <p>{id}: {user.name}</p>
    </div>
  )
}

// .next/server/pages/users

export async function getStaticPaths() { 
  // const result = await fetch('https://jsonplaceholder.typicode.com/users'); 
  // const users = await result.json(); 
  // const paths = users.map((user) => ({ 
  //     params: { id: user.id.toString() }, 
  // })); 
  // return { paths, fallback: false }; 
  return { paths: [{ params: { id: '1' } }], fallback: false }; 
}; 

export async function getStaticProps({ params }) { 
  const result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`); 
  const user = await result.json(); 
  return { props: { user } }; 
} 