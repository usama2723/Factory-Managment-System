import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">

            <div className="relative flex flex-col justify-center w-full lg:w-2/3 min-h-[300px] bg-linear-to-bl from-[#BE202F] via-[#9C2240] to-[#562561] lg:px-14 overflow-hidden">

                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-white">Factory System</h1>
                    <h2 className="font-bold text-white">
                        The most popular Factory System is here
                    </h2>
                </div>

                <div className="absolute bottom-[-190px] left-[-190px] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] border border-white rounded-full"></div>
                <div className="absolute bottom-[-180px] left-[-120px] w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] border border-white rounded-full"></div>
            </div>

            <div className="flex lg:w-1/3 items-center justify-center py-10 lg:py-0">
                <div className="w-[346px] h-[331px] lg:h-[350px] flex flex-col gap-[16px]">
                    <h1 className="text-2xl lg:text-3xl font-bold text-black">Hello!</h1>
                    <h2 className="text-black">Sign up to Get Register</h2>
                    <Input className="bg-white w-[346px] h-[60px] rounded-3xl" type="email" placeholder="Email" />
                    <Input className="bg-white w-[346px] h-[60px] rounded-3xl" type="password" placeholder="Password" />
                    <Input className="bg-white w-[346px] h-[60px] rounded-3xl" type="password" placeholder="Confirm Password" />
                    <Button onClick={() => navigate("/login")}
                        className="bg-[#BE202F] hover:bg-[#743a40] w-[346px] h-[57px] rounded-3xl">Register</Button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
