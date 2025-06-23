import { useEffect, useState } from "react"

// id,size,x,y,opacity,animationDuration -> Star's Attribute
// id,size,x,y,delay,animationDuration -> meteors's Attribute

const StarBackground = () => {
    // Create list of object that keep going to track stars
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = ()=>{
            generateStars()
        };
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    }, [])

    const generateStars = () => {
        const numbersofStars = Math.floor(window.innerWidth * window.innerHeight / 10000)

        const newStars = [];
        for (let i = 0; i < numbersofStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100, // x and y is Position of stars(0-100%)
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars)
    };

    const generateMeteors = () => {
        const numbersofMeteors = 5;
        const newMeteors = [];

        for (let i = 0; i < numbersofMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 30,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors)
    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
                />
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor"
                     style={{
                        width: meteor.size + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                    
                />
                ))} 
        </div>

    );
};

export default StarBackground