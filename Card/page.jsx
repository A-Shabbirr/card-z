import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div className="h-90 relative w-75 rounded-xl flex flex-col items-center justify-center bg-sky-800 m-5">
            <svg width="200" height="200" viewBox="0 0 200 200" className="bg-sky-800 rounded-full mt-6">
                <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fontSize="16" fill="white">
                    <textPath href="#circlePath" startOffset="24%" textAnchor="middle">
                        Your Your Your Your Your
                    </textPath>
                </text>
            </svg>
            <Image
                className="h-35 w-35  object-cover overflow-hidden rounded-full absolute top-15 right-20 "
                src="/nfsmw.png"
                alt="desc"
                width={500}
                height={500}
            />
            <div className="p-4">
                <p className="text-white mt-4 text-center">Best Pizza Ever!</p>
                <p className="text-white text-center">and top notch service</p>
                <p className=" font-semi-bold text-white text-center mt-4 underline underline-offset-4">
                    Learn More
                </p>
            </div>
        </div>
    );
}
export default Card;