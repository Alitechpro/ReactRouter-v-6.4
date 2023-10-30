import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="text-center m-4  bg-gray-600 text-white p-5 text-xl">
      {data.bio}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
