import React, { useState } from "react";
import Card from "./Card";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
function Testimonial(props){
    let reviews=props.reviews
    const [counting,setCount]=useState(4);
    function leftShiftHandler(){
        if(counting-1<0){
            setCount(reviews.length-1);
        }
        else{
            setCount(counting-1)
        }
    }

    function rightShiftHandler(){
        if(counting+1>=reviews.length){
            setCount(0);
        }
        else{
            setCount(counting+1)
        }
    }

    function surpriseHandler(){
       let x= Math.floor(Math.random()*reviews.length);
       setCount(x);
    }

    return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl h-[70vh] rounded-md">
        <Card review={reviews[counting]}></Card>
        <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold place-content-center">
            <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500">
                <IoIosArrowBack></IoIosArrowBack>
            </button>
            <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
                <IoIosArrowForward></IoIosArrowForward>
            </button>
        </div>
        <div className="mt-6">
            <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise me</button>
        </div>
    </div>
    )
}

export default Testimonial;