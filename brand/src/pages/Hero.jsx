import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="text-center w-[1125px] h-[600px] justify-start items-center inline-flex">
        <div className="flex-col justify-center ml-10 items-start gap-5 inline-flex">
          <div className="text-black text-[90px] text-start font-extrabold font-['Poppins'] leading-[90px]">
            YOUR FEET <br />
            DESERVE
            <br />
            THE BEST
          </div>
          <div className="w-[404px] h-[91px] text-start text-zinc-600 text-base font-semibold font-['Poppins']">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </div>
          <NavLink className="justify-start items-start gap-10 inline-flex">
            <div className="px-4 py-1.5 bg-red-600 justify-start items-start gap-2.5 flex text-white text-2xl font-semibold font-['Inter']">
              <div className="">Shop Now</div>
            </div>
            <NavLink
              to="/category"
              className="px-4 py-1.5 border border-black justify-start items-start gap-2.5 flex hover:bg-red-600 hover:border-black text-zinc-600 text-2xl font-semibold hover:text-white font-['Inter'] "
            >
              <div className=" ">Category</div>
            </NavLink>
          </NavLink>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-zinc-600 text-base font-normal font-['Inter']">
              Also Available On
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <img className="w-8 h-8" src="./Images/amazon.png " />
              <img className="w-8 h-8" src="./Images/flipkart.png" />
            </div>
          </div>
        </div>
        <img
          className="w-[530px] h-[487.06px] shadow"
          src="./Images/shoe_image.png"
        />
      </div>
    </>
  );
};

export default Hero;
