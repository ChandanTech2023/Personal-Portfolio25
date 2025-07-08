export const Herosection = ()=>{
    return(
        <section id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
                        <span className=" opacity-50 animate-fade-in">Hi I'am </span>
                        <span className="text-primary animate-fade-in">{" "}Chandan</span>
                        <span> Kumar </span>
                    </h1>

                </div>

            </div>

        </section>
    )
}