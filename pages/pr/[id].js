import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      toast.success("Task deleted");
      router.push("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get(
    "http://localhost:3001/api/products/" + query.id
  );

  console.log(product);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
