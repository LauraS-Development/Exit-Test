import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import ProductPage from "../pr/[id]";

function MemberPage({ member }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/team/" + id);
      toast.success("Task deleted");
      router.push("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Name: {member.name}</p>
        <p>Description: {member.description}</p>
        <p>Position: {member.position}</p>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: member } = await axios.get(
    "http://localhost:3000/api/team/" + query.id
  );

  console.log(member);

  return {
    props: {
      member,
    },
  };
};

export default MemberPage;
