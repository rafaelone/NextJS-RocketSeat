import { GetStaticProps } from 'next';

export default function Top10({products}: ITop10Props) {

  return (
    <div>
      <h1>Top 10</h1>
      <ul>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul> 
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ITop10Props> = async (context) => {
  const response = await fetch('http://localhost:3333/products');
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 5
  };
};
