import { GetStaticProps } from 'next';

export default function Top10() {
  return (
    <div>
      <h1>Top 10</h1>
      <ul>
        <ul>
          {recommendedProducts.map((recommendedProduct) => (
            <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export const getStatisProps: GetStaticProps = async (context) => {
  const response = await fetch('http://localhost:3333/products');
  const recommendedProducts = await response.json();
  return {
    props: {},
  };
};
