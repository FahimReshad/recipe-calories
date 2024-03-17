import { GrUserManager } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
    return (
        <>
         <div className="flex flex-col lg:flex-row items-center justify-between my-6 lg:my-12 container mx-auto gap-2 lg:gap-0">       
            <h2 className="text-black text-3xl font-bold lexend-font">Recipe Calories</h2>
            <div className="space-x-8 text-[#150B2BB3] font-semibold fira-font">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex items-center gap-3 justify-center relative">
            <input className="bg-gray-200 rounded-3xl pl-6 py-2 font-medium" type="text" name="" id=""  placeholder="    Search" />
             <CiSearch className="absolute left-4 text-xl text-[#150B2BB3]"/>
                <button className=" bg-green-600 rounded-full p-3">
                <GrUserManager /></button>
                
            </div>


            

        </div>


        
        </>
       
    );
};

export default Navbar;