import Image from 'next/image';
import React from 'react';
import styles from './circularText.module.css';

const Card = () => {
    const text = 'Alfatiha, Editor ';

    return (
        <div className="m-4 h-90 relative w-75 rounded-xl flex flex-col items-center justify-center bg-sky-800">
            <div className={styles['circular-text']}>
                {[...text].map((char, i) => (
                    <span
                        key={i}
                        style={{ transform: `rotate(${i * 9}deg)` }}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <div className="bg-blue-400 w-30 h-30 rounded-full  flex flex-direction: column items-center justify-center overflow-hidden ">
                <Image
                    className="h-48 w-96 object-cover "
                    src="/nfsmw.png"
                    alt="desc"
                    width={500}
                    height={500}
                />
            </div>
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
