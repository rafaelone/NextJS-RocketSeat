import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import React from "react"

export default function Category({products}: ICategoryProps){
  const router = useRouter()

  if(router.isFallback){
    return <p>Carregando...</p>
  }

  return (
    <div>
       <ul>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul> 
      </ul>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3333/categories`);
  const categories = await response.json();
 
  const paths = categories.map(category => ({
    params: { slug: category.id}
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ICategoryProps> = async(context) => {
  const { slug } = context.params;
  console.log(slug)
  
  const response = await fetch(`http://localhost:3333/products?category_id=${slug}`);
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}