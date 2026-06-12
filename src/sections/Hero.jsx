import { Button } from "@/components/button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowRight, ChevronDown,   Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import * as Icons from "lucide-react";
// console.log(Icons);
export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/*background image*/}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" alt="hero image" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        </div>
        {/*green dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, index) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${
                        15 + Math.random() * 20
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}></div>
            ))}
        </div>
        {/*content*/}
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*left column -text content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer －O－ React Specialist
                        </span>
                    </div>
                    {/* headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            <span className="mr-1 tracking-[0.1em]">Crafting</span> 
                            <span className="text-primary glow-text">
                                seamless digital
                            </span>
                            <br/>
                                experiences with
                            <br/>
                            <span className="tracking-[0.1em] text-primary font-serif italic font-normal ">
                                Precision.{/* C, C++ and Java. */}
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Anuraj - a software engineer specializing in C, C++, and Java. With a passion for crafting seamless digital experiences, I bring precision and creativity to every project.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            I build scalable, performant applications that users love.
                            I design and build exceptional digital experiences that are fast, accessible, and visually appealing.
                        </p>
                    </div>
                    {/* call to action buttons */}
                    <div className="inline-flex">
                        <Button size="lg">
                            Contact Me<ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download/>Resume
                        </AnimatedBorderButton>
                        <AnimatedBorderButton>
                            <Download/>CV
                        </AnimatedBorderButton>
                    </div>
                    {/* Social links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow:</span>
                        {[
                            { icon: FaGithub, href: "#" },
                            { icon: FaLinkedin, href: "#" },
                            { icon: FaTwitter, href: "#" },
                            ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5" />}
                            </a>
                        ))}
                    </div>
                </div>
                {/*right column -profile image*/}
                <div className="relative animate-fade-in animation-delay-400">
                    {/* profile image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 
                            rounded-3xl bg-gradient-to-br 
                            from-primary/30 via-transparent 
                            to-primary/10 blur-2xl animate-pulse"
                            />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                                src="/profile-photo.png"
                                alt="Anuraj"
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />
                            {/* floating badge */}
                            <div>
                                <div>
                                    <div/>
                                    <span>
                                        
                                    </span>
                                </div>
                            </div>
                            {/* stats badge */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}