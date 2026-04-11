
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";

const AppsCard = ({ app }) => {
  // console.log(app);
  return (
    <Link href={`/apps/${app.id}`} className="shadow-sm p-4 rounded-xl space-y-3 bg-white">
      <div className="flex justify-center bg-gray-200">
        <Image src={app.image} className="h-52 rounded-3xl
         p-4  " alt="app.title" height={200} width={200}/>
      </div>
      <p className="text-lg">{app.title}</p>
      <div className="flex justify-between">
        <p className="flex gap-1  p-2 rounded-xl items-center text-green-400 bg-gray-100"><FaArrowDown /> {app.downloads}</p>
        <p className="flex gap-1  p-2 rounded-xl items-center text-orange-400 bg-orange-100"><FaStar /> {app.ratingAvg} </p>
      </div>
    </Link>
  );
};

export default AppsCard;
