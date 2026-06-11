import { Button } from "../components/Button"

const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"}
]

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    ANURAJ<span></span>
                </a>
                {/*Desktop Menus*/}
                <div className="hidden md:flex flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors duration-300 hover:bg-surface">
                                {link.label} 
                            </a>
                        ))}
                    </div>
                </div>
                {/*contact me button*/}
                <div><Button size="sm">Contact Me</Button></div>
            </nav>
        </header>
    )
}