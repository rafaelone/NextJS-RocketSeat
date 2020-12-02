import { GetServerSideProps } from 'next';
import { useCallback } from 'react';
import { Title } from '../styles/pages/Home';

//TTFB - TIME TO FIRST BITY

export default function Home({ recommendedProducts }: IHomeProps) {
 
  

  const handleSum = useCallback(async() => {
    const math = (await import('../lib/math')).default;
    alert(math.sum(3,1))
  }, [])
 
  return (
    <div>
      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map((recommendedProduct) => (
            <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
          ))}
        </ul>
      </section>
      <button type="button" onClick={handleSum}>Sum</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();
  return {
    props: {
      recommendedProducts,
    },
  };
};
