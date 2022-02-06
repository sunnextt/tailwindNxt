import { Button } from './Button';


export const Card = () => {
  return  (
    <div className="basis-1/2 flex flex-col justify-center items-center" >
        <div >
            <div className="flex justify-between gap-4">
            <div className="rounded-full w-20 h-20 p-2 flex items-center justify-center bg-white">
                <img src="/logo.png" className="w-18 h-18 rounded-full" />
            </div>
            <div className="w-full text-center border border-white">
                <h1 className="head-t font-bold font-mono tracking-wide py-2 text-2xl">HILTON HOTEL</h1>
                <h2 className="bg-white text-black text-xl pb-1">POWERED BY TRAVEL JINNI</h2>
            </div>
        </div>
        <div className="div-w w-96  text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10  rounded-md backdrop-blur-md">
            <h1 className="text-5xl font-serif font-bold pb-5 px-4">Your Trip Awaits You!</h1>
            <p className="text-sm pb-5">
                We have taken some time to help plan your trip to make it a memmorable one. Access your calender for even more things you can do on your trip.
            </p>
            <Button>ACCESS CALENDAR</Button>
        </div>
        </div>
    </div>
  )
};
