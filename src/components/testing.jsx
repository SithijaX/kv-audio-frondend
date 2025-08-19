import { useState } from "react"

export default function Testing() {
    const [count, setCount] = useState(0)

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center relative gap-4">


           

            {/*action box*/}
            <div className="w-[600px] h-[250px] bg-white rounded-2xl drop-shadow-2xl
                            flex items-center justify-center flex-col gap-4">

                 <span className="text-3xl text-black ">
                    Counter
                 </span>

                {/*Display*/}
                <div className="w-[320px] h-[70px] bg-blue-50 rounded-xl shadow-2xl flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-blue-500">
                        {count}
                    </h1>
                </div>

                <div className="flex flex-row gap-3 items-center justify-center">
                    {/* increment button */}
                    <button
                    onClick={() => setCount(count + 1)} 
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 flex">

                        <span className="text-lg font-semibold">Increment</span>
                        <span className="ml-2 text-2xl">+</span>

                    </button>

                    {/* decrement button */}
                    <button
                    onClick={() => setCount(count - 1)} 
                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 flex">
                        <span className="text-lg font-semibold">Decrement</span>
                        <span className="ml-2 text-2xl">-</span>

                    </button>
                </div>

                
            </div>

            <div className="w-[700px] h-[100px] flex flex-row">
                {/* Coconut */}
                <button className="ml-4 px-4 py-2 w-[100px] h-[45px] bg-green-400 text-xl text-white rounded-lg
                                   shadow-md hover:bg-green-600 flex items-center justify-center">
                    <span className="text-lg font-semibold">
                        Coconut
                    </span>
                </button>

                {/* Apple */}
                <button className="ml-4 px-4 py-2 w-[100px] h-[45px] bg-green-400 text-xl text-white rounded-lg
                                   shadow-md hover:bg-green-600 flex items-center justify-center">
                    <span className="text-lg font-semibold">
                        Coconut
                    </span>
                </button>

                {/* Orange */}
                <button className="ml-4 px-4 py-2 w-[100px] h-[45px] bg-green-400 text-xl text-white rounded-lg
                                   shadow-md hover:bg-green-600 flex items-center justify-center">
                    <span className="text-lg font-semibold">
                        Coconut
                    </span>
                </button>

                {/* Mangus */}
                <button className="ml-4 px-4 py-2 w-[100px] h-[45px] bg-green-400 text-xl text-white rounded-lg
                                   shadow-md hover:bg-green-600 flex items-center justify-center">
                    <span className="text-lg font-semibold">
                        Coconut
                    </span>
                </button>

            </div>

        </div>
    )
}