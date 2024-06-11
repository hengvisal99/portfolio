import { Button } from "@nextui-org/react"
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
    return (
        <div className="h-[93svh] grid place-content-center grid-cols-2">
            <div className="border border-red-500 flex gap-4 flex-col my-auto">
                <p className="text-6xl">Hello ,</p>
                <p className="text-6xl text-[#2382EF]">I am Heng Visal</p>
                <p className="text-3xl">FRONT-END DEVELOPER</p>
                <Button color="primary" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} >
                    Hire me
                </Button>
            </div>
            <div className="border border-red-500">
                <img src="resume.svg" className="h-[400px] mx-auto"></img>
            </div>
        </div>
    )
}

export default Home