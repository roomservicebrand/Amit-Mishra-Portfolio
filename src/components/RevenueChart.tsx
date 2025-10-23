
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface RevenueChartProps {
    theme: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ theme }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(13, 110, 253, 0.3)');
                gradient.addColorStop(1, 'rgba(13, 110, 253, 0)');

                const isDarkMode = theme === 'dark';
                const tickColor = isDarkMode ? '#9ca3af' : '#6c757d';
                const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#e9ecef';


                chartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Q1 22', 'Q2 22', 'Q3 22', 'Q4 22', 'Q1 23', 'Q2 23', 'Q3 23', 'Q4 23'],
                        datasets: [{
                            label: 'Monthly Revenue ($K)',
                            data: [450, 520, 580, 640, 680, 720, 750, 780],
                            borderColor: '#0d6efd',
                            backgroundColor: gradient,
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#0d6efd',
                            pointRadius: 5,
                            pointHoverRadius: 7
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: { legend: { display: false } },
                        scales: {
                            y: {
                                beginAtZero: false, 
                                min: 400,
                                ticks: { color: tickColor, callback: (value) => '$' + value + 'K' },
                                grid: { color: gridColor }
                            },
                            x: {
                                ticks: { color: tickColor },
                                grid: { display: false }
                            }
                        }
                    }
                });
            }
        }
        
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [theme]);

    return <canvas ref={chartRef} id="revenueChart"></canvas>;
};

export default RevenueChart;