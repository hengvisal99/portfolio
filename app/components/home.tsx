import { Button } from "@nextui-org/react"
import { IoIosArrowForward } from "react-icons/io";
import Photo from "./photo";

const Home = () => {
    return (
        <div className="h-[93svh] grid place-content-center grid-cols-1 lg:grid-cols-2">
            <div className="border border-red-500 flex gap-4 flex-col my-auto order-2 lg:order-none">
                <h1>Hello ,</h1>
                <h1 className=" text-accent">I'm Heng Visal</h1>
                <p className="text-3xl">FRONT-END DEVELOPER</p>
                <Button color="success" className=" text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                    success
                </Button>
            </div>
            <div className="border border-red-500 order-1 lg:order-none">
                <Photo></Photo>
            </div>
        </div>

    )
}

export default Home