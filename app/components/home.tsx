import { Button } from "@nextui-org/react"
import { IoIosArrowForward } from "react-icons/io";
import HomePhoto from "./HomePhoto";

const Home = () => {
    return (
        <div id="Home" className="grid lg:gap-x-3 place-content-center grid-cols-1 lg:grid-cols-2 h-[94svh]">
            <div className="flex gap-5 flex-col my-auto order-2 lg:order-none place-items-center lg:place-items-start">
                <h1>Hello ,</h1>
                <h1 className="text-accent">I'm Heng Visal</h1>
                <h2 className="text-[23px] sm:text-[25px]">FRONT-END DEVELOPER</h2>
                <Button color="success" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                    success
                </Button>
            </div>
            <div className="order-1 lg:order-none mb-8 lg:my-0">
                <HomePhoto/>
            </div>
        </div>

    )
}

export default Home