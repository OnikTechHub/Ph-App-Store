import Banner from "@/components/homepage/Banner/Banner";
import Ratings from "@/components/homepage/Ratings/Ratings";
import TrandingApps from "@/components/homepage/TrandingApps/TrandingApps";


const page = () => {
  return (
    <div >
      <Banner></Banner>
      <Ratings></Ratings>
      <TrandingApps from="homepage"></TrandingApps>
      
    </div>
  );
};

export default page;