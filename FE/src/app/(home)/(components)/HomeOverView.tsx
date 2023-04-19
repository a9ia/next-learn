// 'use client'
// import useSWR from "swr";

// function GetEthereumLatest() {
//   const network = process.env.NEXT_PUBLIC_NETWORK;
//   const projectId = process.env.NEXT_PUBLIC_PROJECTID;
//   // const fetcher = (...args:any) => fetch(...args).then((res) => res.json())
//   const { data, error, isLoading } = useSWR("https://" + network + ".infura.io/v3/" + projectId, fetch);
//   if (error) {
//     console.log(error);
//     return;
//   }
//   if (isLoading) {
//     return <div>loading...</div>;
//   }
//   return data;
// }

export default function OverView() {
  // console.log(process.env.NEXT_PUBLIC_NETWORK)
  // console.log(GetEthereumLatest())
  return(
    <section className="section-body h-[160px] relative top-[-50px]">
      <div className="contain-body card-white grid grid-cols-3 divide-x divide-gray-200 p-3">
        <div className="grid grid-cols-1 divide-y divide-gray-200 pr-3">
          <div></div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-200 px-3">
          <div></div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-200"></div>
      </div>
    </section>
  )
}