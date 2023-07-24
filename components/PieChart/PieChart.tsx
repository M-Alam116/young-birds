import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

export default function PieChart() {
    // const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        backgroundColor: 'rgba(27, 26, 31, 1)',
        data: [
            {
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: 10, label: "YBC Staking Rewards 10B", color: 'rgba(139, 82, 245, 1)' },
                    { y: 10, label: "Soar Labs 10B", color: 'rgba(82, 245, 147, 1)' },
                    { y: 4, label: "Launch Contributors 1 4B", color: 'rgba(249, 223, 159, 1)' },
                    { y: 9, label: "Launch Contributors 2 9B", color: 'rgba(167, 167, 167, 1)' },
                    { y: 14, label: "Launch Contributors 3 14B", color: 'rgba(255, 127, 0, 1)' },
                    { y: 2, label: "Advisory Board 2B", color: 'rgba(238, 28, 230, 1)' },
                    { y: 36, label: "Soar DAO 36B", color: 'rgba(0, 255, 255, 1)' },
                    { y: 10, label: "Community Sale 10B", color: 'rgba(36, 118, 255, 1)' },
                    { y: 5, label: "Strategic Acquisitions 5B", color: 'rgba(255, 194, 39, 1)' },
                ],
            },
        ],
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};



