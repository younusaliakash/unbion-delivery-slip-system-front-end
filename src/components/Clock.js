import React, { useState } from 'react';
import { days, engToBdNum } from './Invoice';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date())


    const updateTime = () => {
        setCurrentTime(new Date())
    }

    setInterval(updateTime, 1000)


    console.log("boss")
    return (
        <p className='clock'>
            {/* {
                engToBdNum(new Date(currentTime).toLocaleTimeString())
            }  */}
            {" | "}
            <span>{engToBdNum(new Date().toLocaleDateString("en-GB"))}</span> {" | "}
            <span>{days[new Date().getDay()]}</span>
        </p>
    );
};

export default Clock;