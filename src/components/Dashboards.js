import React from 'react';

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];

const Dashboards = () => {
    return (
        <main>
            <div className='pg-header'>
                <div className='container'>
                    <h1>Display By Chart</h1>
                </div>
            </div>
            <div className='container content'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-lg-6'>
                        <LineChart width={600} height={400} data={data}>
                            <CartesianGrid></CartesianGrid>
                            <XAxis dataKey="month"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line dataKey={'investment'}></Line>
                            <Line dataKey='revenue'></Line>
                        </LineChart>
                    </div>
                    <div className='col-lg-6'>
                        <LineChart width={600} height={400} data={data}>
                            <CartesianGrid></CartesianGrid>
                            <XAxis dataKey="month"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line dataKey={'sell'}></Line>
                        </LineChart>
                    </div>
                    <br />
                    <div className='col-lg-6'>
                        <BarChart width={600} height={400} data={data}>
                            <CartesianGrid></CartesianGrid>
                            <XAxis dataKey="month"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey="investment" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className='col-lg-6'>
                        <BarChart width={600} height={400} data={data}>
                            <CartesianGrid></CartesianGrid>
                            <XAxis dataKey="month"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey="sell" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Dashboards;