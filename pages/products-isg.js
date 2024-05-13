export default function Products ({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <p>Products list:</p>
      <ul>
        {products ? products.map(i => <li key={i.id}>{i.name}</li>) : null}
      </ul>  
    </div>
  )
}

// .next/server/pages/products-ssg.html
export async function getStaticProps() {
  const res = await fetch('https://fakerapi.it/api/v1/products?_id=1').then(r => r.json());
  return { props: { products: res.data }, revalidate: 5 }
}