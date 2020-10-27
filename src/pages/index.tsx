import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home';

//TTFB - TIME TO FIRST BITY

export default function Home({ recommendedProducts }: IHomeProps) {
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
