import { Button } from "@nextui-org/react"
import { IoIosArrowForward } from "react-icons/io";
import HomePhoto from "./HomePhoto";

const Home = () => {
    return (
        <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 h-[91svh]">
            <div className="flex gap-4 flex-col my-auto order-2 lg:order-none place-items-center lg:place-items-start">
                <h1>Hello ,</h1>
                <h1 className="text-accent">I'm Heng Visal</h1>
                <h3 className="text-3xl">FRONT-END DEVELOPER</h3>
                <Button color="success" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                    success
                </Button>
            </div>
            <div className="order-1 lg:order-none my-8 lg:my-0">
                <HomePhoto/>
            </div>
        </div>

    )
}

export default Home