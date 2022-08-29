import axios from "axios";
import Link from "next/link";

function ProductsPage({ products = [] }) {
  const renderProducts = () => {
    if (products.length === 0) return <h1>No Products</h1>;
    return products.map((product) => (
      <div key={product.id} product={product}>
        <Link href={`/products/${product.id}`}>
          <a
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
            key={product.id}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-200">
              {product.description}
            </p>
            <p className="font-bold text-gray-800 dark:text-gray-100 text-2xl">
              {product.price} $
            </p>
          </a>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderProducts()}
      </div>
    </>
  );
}

export default ProductsPage;

export const getServerSideProps = async () => {
  const { data: products } = await axios.get(
    "http://localhost:3001/api/products"
  );

  return {
    props: {
      products,
    },
  };
};
