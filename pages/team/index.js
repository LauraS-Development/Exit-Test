import axios from "axios";
import Link from "next/link";

function Teampage({ team = [] }) {
  const renderMembers = () => {
    if (team.length === 0) return <h1>Members</h1>;
    return team.map((team) => (
      <div key={team.id} team={team}>
        <Link href={`/team/${team.id}`}>
          <a
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
            key={team.id}
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {team.name}
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-200">
              {team.description}
            </p>
            <p className="font-bold text-gray-800 dark:text-gray-100 text-2xl">
              {team.position}
            </p>
          </a>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderMembers()}
      </div>
    </>
  );
}

export default Teampage;

export const getServerSideProps = async () => {
  const { data: team } = await axios.get("http://localhost:3000/api/team");

  return {
    props: {
      team,
    },
  };
};
