// "use client"; 
import { ScaleLoader } from "react-spinners";
import AppsCard from "./AppsCard";
import Link from "next/link";
// import useApps from "@/hooks/useApps";

const appPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
}

const TrandingApps = async ({from}) => {
  const apps = await appPromise();
  // const {apps,loading} = useApps()
  // console.log(loading ,"loading")
  console.log(from);
  return (
    <div className=" py-20 bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">{from ==="homepage" ? "Trending Apps" : "All apps" }</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {
        // loading ? <div className="flex justify-center items-center"><ScaleLoader color="#4A0E4E"/></div> : 
         <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 my-10 w-11/12 md:w-10/12 mx-auto">{
        apps.slice(0, from === "homepage" ? 9 : apps.length -1 ).map((app,i)=> <AppsCard app={app} key={i}/>)
        }</div>
        <div className="text-center">
         <Link href={'/apps'}> <button className="btn btn-primary ">Show All</button></Link>
      </div> ;
</>
     
      }

       
    </div>
  );
};

export default TrandingApps;
