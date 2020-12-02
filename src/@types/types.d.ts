interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}


interface ITop10Props {
  products: IProduct[]
}

interface ICategoryProps {
  products: IProduct[]
}