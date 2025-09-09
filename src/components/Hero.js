import React, { useState, useEffect } from 'react';


function Hero({ children }) {

    return (

        <section
            className="relative h-screen bg-fixed bg-center bg-cover flex flex-col 
        items-center justify-center text-white text-center pt-32"
            style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}
        >
            {/* overlay escuro */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* conteúdo */}
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    a good visual says more than 1.000 words
                </h1>

                <p className="text-1xl md:text-2xl mb-1 mb-3">
                    what do you wanna say today?
                </p>
                {children}
            </div>
        </section>

    )

}

export default Hero;
