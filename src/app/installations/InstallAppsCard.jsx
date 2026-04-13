
// import { FaArrowDown, FaStar } from "react-icons/fa";

// const InstallAppsCard = ({ app,handleUninstall }) => {
//   return (
//     <div className="flex justify-between  w-10/12 mx-auto border border-gray-100 bg-white rounded-2xl p-5 my-4 shadow-sm items-center">
//       {
//         <>
//           <div className="flex items-center justify-between gap-6 ">
//             <div>
//               <Image className="h-24" src={app.image} alt="" />
//             </div>
//             <div ><h2 className="text-2xl font-semibold">{app.title}</h2> 
//             <div className="flex items-center gap-6 p-2">
//               <p className="text-green-500 text-xl items-center flex gap-1 ">
//                 <span>
//                   <FaArrowDown />
//                 </span>{" "}
//                 {app.downloads}
//               </p>
//               <p className="text-orange-500 text-xl  items-center flex gap-1 ">  <span  ><FaStar /></span> {app.ratingAvg}</p> <p>{app.size}MB</p>
//             </div>
//             </div>
//           </div>
//           <div>
//             <button className="btn btn-success  text-white" onClick={()=>handleUninstall(app)}>Uninstall</button>
//           </div>
//         </>
//       }
//     </div>
//   );
// };

// export default InstallAppsCard;
