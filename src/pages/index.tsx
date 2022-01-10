import { trpc } from '@/utils/trpc';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["hello", {text: "Daniel"}]);

  if (isLoading) return <div>is loading</div>;
  if (data) return <div>{data.greeting}</div>;

  return (
    <>
    <div className="absolute w-full h-full flex justify-center items-center bg-slate-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-400">
          Douzepoints
        </h1>
        <p className="italic text-slate-200">Work in progress...</p>
      </div>
    </div>
    </>
  )
}

export default Home;
