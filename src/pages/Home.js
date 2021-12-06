import React from 'react';
import './Home.css';


function Home() {
    return (
        <div className = "home">
           <div className = "home__bg">
            
            {/* home content */}
            <div className="container">
                <div className="home__content">
                    <div className="home__meta">
                        <h1 className="home_text pz__10">
                        WELCOME TO MY WORLD
                        </h1>
                        <h2 className="home_text pz__10">
                        Hi! I'm Panje
                        </h2>
                        <h3 className="home_text sweet pz__10">
                         Full-stack Web Developer
                        </h3>

                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Home;
