import React from 'react';
import { Toaster } from 'react-hot-toast';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div><Toaster/></div>
            <h2 className="text-5xl">Welcome home</h2>
        </div>
    );
};

export default Home;