import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularProgress = ({ value, completedColor, remainingColor }) => {
    const data = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [value, 100 - 50

                ],
                backgroundColor: [completedColor, remainingColor],
                hoverBackgroundColor: [completedColor, remainingColor],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '70%', // Adjust this value to change the size of the hole in the middle
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
        rotation: -90,
        circumference: 180,
        maintainAspectRatio: false,
    };

    return (
       <div>
                <div style={{ position: 'relative', width: 100, height: 100 }}>
                    <Doughnut data={data} options={options} />
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '18px',
                            color: completedColor,
                        }}
                    >
                        {value}%
                    </div>
                </div>
                
           </div>
    );
};

export default CircularProgress;
