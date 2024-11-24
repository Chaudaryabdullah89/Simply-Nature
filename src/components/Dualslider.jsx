import React, { useState } from 'react';

const DualRangeSlider = () => {
    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(5000);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    return (
        <div className="relative w-full">
            <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
            {/* Progress bar between two sliders */}
            <div
                className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-gray-200 rounded-lg"
                aria-hidden="true"
            >
                <div
                    className="h-full  bg-red-500 rounded-lg"
                    style={{
                        left: `${((minValue - 1000) / 4000) * 100}%`,
                        right: `${100 - ((maxValue - 1000) / 4000) * 100}%`,
                        position: 'absolute',
                    }}
                ></div>
            </div>

            {/* Minimum Range Slider */}
            <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={minValue}
                onChange={handleMinChange}
                className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-20"
                style={{
                    zIndex: 21,
                }}
            />

        

            <div className="flex justify-between pt-8 mt-4">
                <p>${minValue}</p>
                <p>${maxValue}</p>
            </div>
        </div>
    );
};

export default DualRangeSlider;
