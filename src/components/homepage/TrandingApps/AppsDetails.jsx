import React, { useContext } from "react";
import { useParams } from "react-router";
import useApps from "../../../hooks/useApps";
import { ClimbingBoxLoader } from "react-spinners";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import AppContext, { AppProvider } from "../../../appContext/AppContext";

const AppsDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const { apps, loading } = useApps();

  const findApp = apps.find((app) => app.id == id);
  // console.log(findApp);
  //  console.log(apps,loading)
const {installApps,setInstallApps} = useContext(AppProvider)
const handleINstallApps =()=>{
   const exists = installApps.find(app => app.id == findApp.id);
if ( exists) {
  alert('is item is existed')
  return
} else {
  setInstallApps([...installApps,findApp])
}


}
  return (
    <div className="bg-gray-50">
      {loading ? (
        <div className="flex justify-center items-center">
          <ClimbingBoxLoader color="#4A0E4E" />
        </div>
      ) : (
        <>
          <div className="flex w-10/12 mx-auto py-20">
            <div className="pr-10 ">
              <img className="h-96 rounded-3xl" src={findApp.image} alt="app img" />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">{findApp.title}</h1>
             
         <p className="text-gray-500 text-lg">Developed by : <span className="text-purple-600">{findApp.companyName}</span></p>
              <div className="divider "></div>
             <div className="flex justify-between items-center gap-12 my-10">
                 <div>
                    <span className="text-green-500 text-3xl  "><FaArrowDown /></span>
                <p className="text-gray-500 py-2">Downloads</p>
                <p className="text-4xl font-bold">{findApp.downloads}</p>
              </div>
              <div>
                <span className="text-orange-500 text-3xl  "><FaStar /></span>
                <p className="text-gray-500 py-2">Avarage Ratings</p>
                <p className="text-4xl font-bold">{findApp.ratingAvg}</p>
              </div>
              <div>
                <span className="text-purple-500 text-3xl  "><GrLike /></span>
                <p className="text-gray-500 py-2">Total Reviews</p>
                <p className="text-4xl font-bold">{findApp.reviews}</p>
              </div>
             </div>
              <button className="btn btn-success text-white" onClick={ handleINstallApps}>Install Now ({findApp.size}MB)</button>
            </div>
               <div className="divider "></div>
          </div>
         
        </>
      )}
    </div>
  );
};

export default AppsDetails;
