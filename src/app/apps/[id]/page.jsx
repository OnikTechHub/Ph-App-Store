import Image from "next/image";
import { FaBuilding, FaDownload, FaStar } from "react-icons/fa";
import Link from "next/link";

const appPromise = async function () {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}
const AppDetailsPage = async ({ params }) => {

    const apps = await appPromise();

    console.log(apps, "Apps")

    const { id } = await params;
    console.log(id, "params")

    const app = apps.find(app => app.id == id)
    console.log(app, "Apps")

    


    return (
        <div className="bg-[#F8F9FB] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">

                {/* Main Details Card */}
                <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12">

                    {/* Left: App Banner Image */}
                    <div className="lg:w-1/2">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                className="rounded-[2rem] object-cover shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right: App Information */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="space-y-2">
                            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">App Details</span>
                            <h1 className="text-5xl font-black text-gray-900 leading-tight">{app.title}</h1>
                            <div className="flex items-center gap-6 text-gray-500 font-medium">
                                <span className="flex items-center gap-2"><FaBuilding className="text-gray-300" /> {app.companyName}</span>
                                <span className="flex items-center gap-2"><FaStar className="text-orange-400" /> {app.ratingAvg}</span>
                                <span className="flex items-center gap-2"><FaDownload className="text-green-500" /> {app.downloads}</span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
                            {app.description}
                        </p>

                        {/* Stats Boxes */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                                <p className="text-gray-400 text-xs font-bold uppercase">Size</p>
                                <p className="text-xl font-extrabold text-gray-800 mt-1">{app.size} MB</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                                <p className="text-gray-400 text-xs font-bold uppercase">Reviews</p>
                                <p className="text-xl font-extrabold text-gray-800 mt-1">{app.reviews}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                                <p className="text-gray-400 text-xs font-bold uppercase">Downloads</p>
                                <p className="text-xl font-extrabold text-gray-800 mt-1">{app.downloads}</p>
                            </div>
                        </div>

                        {/* <div className="flex gap-4 pt-4">
                            <button
    
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-indigo-100"
                            >
                                Install Now
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-2xl transition-all"
                            >
                                Back to apps
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Ratings Breakdown Card */}
                <div className="mt-8 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Ratings breakdown</h2>
                    <div className="space-y-5 max-w-5xl">
                        {app.ratings && [...app.ratings].reverse().map((rate, index) => {
                            const maxCount = Math.max(...app.ratings.map(r => r.count));
                            const widthPercent = (rate.count / maxCount) * 100;

                            return (
                                <div key={index} className="flex items-center gap-6">
                                    <span className="w-16 text-sm font-bold text-gray-400 uppercase tracking-tighter">{rate.name}</span>
                                    <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                                        <div
                                            className="bg-indigo-600 h-full rounded-full transition-all duration-700 ease-out"
                                            style={{ width: `${widthPercent}%` }}
                                        ></div>
                                    </div>
                                    <span className="w-28 text-right text-sm font-black text-gray-700">
                                        {rate.count.toLocaleString()}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetailsPage;