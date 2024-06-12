import { Button } from '@nextui-org/react'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
    return (
        <div className="border border-red-500 flex gap-4 flex-col my-auto">
            <Button color="default" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                default
            </Button>
            <Button color="primary" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                primary
            </Button>
            <Button color="secondary" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                secondary
            </Button>
            <Button color="success" className=" text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                success
            </Button>
            <Button color="danger" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                danger
            </Button>
            <Button color="warning" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                warning
            </Button>
        </div>
    )
}

export default page
