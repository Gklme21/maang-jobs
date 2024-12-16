import { Sour_Gummy } from "next/font/google";

const sourgummy = Sour_Gummy({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-custom-gradient">
        <div className={sourgummy.className}>
        <h1 className="text-white text-4xl lg:text-6xl my-6 ">MAANG-Jobs</h1>
        </div>
      </div>
      <p className="flex justify-center items-center font-semibold text-xl lg:text-3xl my-12 w-4/5 mx-auto text-justify">
        Check out the Entry-Level jobs from MAANG Companies
      </p>
    </>
  );
};

export default NavBar;
