
function About () {
    return (
        <>
            <div className="  w-full  bg-grey-100 text-center  text-white ">
                <div className="text-5xl my-5  text-center font-700">About CTF</div>
                <div className="text-3xl flex flex-col justify-center my-10 font-600">CTF Description
                <p className="w-[80%]  m-auto my-4  text-2xl  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="text-3xl my-10">Time Line</div>
                <div className="  flex flex-col m-auto md:flex-row justify-center md:space-x-4   my-4  w-full px-20 md:px-40 space-y-4 md:space-y-0 md:h-[50vh]">
                    <div className="  h-96 border border-white rounded-3xl w-full md:h-[90%] text-2xl pt-10 mb-5" >Day 1
                        <div className="flex flex-col items-center  h-[80%] mt-4">
                            <div className="w-[50%] mb-4">Machine 1<br/> Difficulty : Easy</div>
                            <div className="w-[50%]"> Machine 2<br/> Difficulty : Easy</div>
                        </div>
                    </div>
                    <div className="   h-96 border border-white rounded-3xl w-full md:h-[90%] text-2xl pt-10 mb-5">Day 2
                    <div className="flex flex-col items-center  h-[80%] mt-4">
                            <div className="w-[50%] mb-4">Machine 3<br/> Difficulty : Meduim</div>
                            <div className="w-[50%]"> Machine 4<br/> Difficulty : Meduim</div>
                        </div>
                    </div>
                    <div className="   h-96 border border-white rounded-3xl w-full md:h-[90%] text-2xl pt-10 mb-5">Day 3
                    <div className="flex flex-col items-center  h-[80%] mt-4">
                            <div className="w-[50%] mx-auto">Machine 5<br/> Difficulty : Hard</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;