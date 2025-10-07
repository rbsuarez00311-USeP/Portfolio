import { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, Zap, Github, Linkedin, Mail } from 'lucide-react';

export default function Welcome() {
    const [terminalText, setTerminalText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [commandIndex, setCommandIndex] = useState(0);

    const commands = [
        '$ initializing system...',
        '$ loading profile.exe',
        '$ access granted',
        '$ welcome to the matrix'
    ];

    useEffect(() => {
        const text = commands[commandIndex];
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                setTerminalText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    if (commandIndex < commands.length - 1) {
                        setCommandIndex(commandIndex + 1);
                        setTerminalText('');
                    }
                }, 1000);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [commandIndex]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
            {/* Matrix-style background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div
                            key={i}
                            className="border-r border-green-500 animate-pulse"
                            style={{
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '3s'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Scanning line effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan" />
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-green-900 bg-black/80 backdrop-blur-sm">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-400">
                        <Terminal className="w-6 h-6 animate-pulse" />
                        <span className="text-xl font-semibold">&gt; root@portfolio</span>
                    </div>
                </nav>
            </header>

            {/* Hero Section - Terminal */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Terminal Window */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gray-950 border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20">
                            {/* Terminal Header */}
                            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-green-500">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="ml-4 text-green-400 text-sm">terminal@portfolio:~</span>
                            </div>
                            
                            {/* Terminal Body */}
                            <div className="p-6 min-h-[400px] font-mono text-sm">
                                <div className="space-y-2">
                                    <p className="text-green-500">
                                        Last login: {new Date().toLocaleString()}
                                    </p>
                                    <p className="text-green-400 mt-4">
                                        {terminalText}
                                        <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
                                    </p>
                                    
                                    {commandIndex >= commands.length - 1 && (
                                        <div className="mt-6 space-y-3 animate-fadeIn">
                                            <p className="text-green-300">
                                                <span className="text-green-500">$</span> cat profile.txt
                                            </p>
                                            <div className="pl-4 text-green-400 space-y-1">
                                                <p>&gt; Full Stack Developer</p>
                                                <p>&gt; System Architect</p>
                                                <p>&gt; Security Enthusiast</p>
                                            </div>
                                            <p className="text-green-300 mt-4">
                                                <span className="text-green-500">$</span> ls skills/
                                            </p>
                                            <div className="pl-4 text-green-400">
                                                <p>javascript.js &nbsp; typescript.ts &nbsp; react.jsx</p>
                                                <p>python.py &nbsp; linux.sh &nbsp; docker.yml</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-block">
                            <div className="flex items-center gap-2 text-green-500 text-sm mb-4 animate-pulse">
                                <Zap className="w-4 h-4" />
                                <span>[SYSTEM ONLINE]</span>
                            </div>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold text-green-400 leading-tight">
                            <span className="block">&gt; Hello,</span>
                            <span className="block text-green-300">World_</span>
                        </h1>
                        
                        <p className="text-xl text-green-500 leading-relaxed max-w-xl">
                            Crafting digital solutions through code, creativity, and a touch of cyber magic.
                            Welcome to my domain.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-6 py-3 bg-green-500 text-black font-semibold hover:bg-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                                [VIEW PROJECTS]
                            </button>
                            <button className="px-6 py-3 border-2 border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-black transition-all duration-300">
                                [CONTACT ME]
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 pt-6">
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {[
                        { icon: Code, label: 'Projects', value: '50+' },
                        { icon: Cpu, label: 'Clients', value: '30+' },
                        { icon: Terminal, label: 'Commits', value: '5000+' },
                        { icon: Zap, label: 'Uptime', value: '99.9%' }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-gray-950 border border-green-900 p-6 hover:border-green-500 transition-all duration-300 group"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <stat.icon className="w-8 h-8 text-green-500 mb-3 group-hover:animate-pulse" />
                            <p className="text-3xl font-bold text-green-400">{stat.value}</p>
                            <p className="text-green-600 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* About Me Section */}
                <section className="mt-32 border-t border-green-900 pt-20">
                    <div className="flex items-center gap-3 mb-12">
                        <Terminal className="w-6 h-6 text-green-500" />
                        <h2 className="text-3xl font-bold text-green-400">$ cat about.md</h2>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Profile Image */}
                        <div className="lg:col-span-2">
                            <div className="relative group">
                                {/* Glitch effect container */}
                                <div className="relative overflow-hidden border-2 border-green-500 bg-gray-950 aspect-square">
                                    {/* Replace this div with your actual image */}
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                                        <div className="text-center">
                                            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-green-500 bg-gray-900 flex items-center justify-center">
                                                <Terminal className="w-16 h-16 text-green-400" />
                                            </div>
                                            <p className="text-green-500 text-sm">[ YOUR PHOTO HERE ]</p>
                                        </div>
                                    </div>
                                    {/* Use this when you have an actual image:
                                    <img 
                                        src="/path-to-your-image.jpg" 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                    */}
                                    
                                    {/* Scan line effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-scan-slow" />
                                </div>
                                
                                {/* Corner accents */}
                                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-green-400" />
                                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-green-400" />
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-green-400" />
                                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-green-400" />
                            </div>

                            {/* Status indicators */}
                            <div className="mt-6 space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-green-400">STATUS: AVAILABLE</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-green-400">LOCATION: REMOTE</span>
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-gray-950 border border-green-900 p-8 hover:border-green-500 transition-all duration-300">
                                <div className="flex items-start gap-3 mb-4">
                                    <span className="text-green-500 text-xl">&gt;</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-green-400 mb-4">SYSTEM.PROFILE</h3>
                                        <p className="text-green-500 leading-relaxed mb-4">
                                            Passionate developer with a knack for turning complex problems into elegant solutions. 
                                            I specialize in building robust, scalable applications that push the boundaries of what's possible.
                                        </p>
                                        <p className="text-green-500 leading-relaxed">
                                            When I'm not writing code, you'll find me exploring the latest security protocols, 
                                            contributing to open source, or diving deep into system architecture. I believe in 
                                            clean code, continuous learning, and the power of collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-950 border border-green-900 p-6 hover:border-green-500 transition-all duration-300">
                                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        FRONTEND
                                    </h4>
                                    <ul className="text-green-500 text-sm space-y-1">
                                        <li>&gt; React / Next.js</li>
                                        <li>&gt; TypeScript</li>
                                        <li>&gt; Tailwind CSS</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-950 border border-green-900 p-6 hover:border-green-500 transition-all duration-300">
                                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                        <Cpu className="w-4 h-4" />
                                        BACKEND
                                    </h4>
                                    <ul className="text-green-500 text-sm space-y-1">
                                        <li>&gt; Node.js / Python</li>
                                        <li>&gt; PostgreSQL</li>
                                        <li>&gt; Docker / K8s</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Download Resume Button */}
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-gray-950 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" />
                                    [DOWNLOAD RESUME]
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-green-900 mt-32 bg-black/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Branding */}
                        <div>
                            <div className="flex items-center gap-2 text-green-400 mb-4">
                                <Terminal className="w-6 h-6 animate-pulse" />
                                <span className="text-xl font-semibold">&gt; root@portfolio</span>
                            </div>
                            <p className="text-green-600 text-sm">
                                Building the future, one line of code at a time.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-green-400 font-semibold mb-4">$ ls links/</h3>
                            <ul className="space-y-2 text-green-500 text-sm">
                                <li>
                                    <a href="#" className="hover:text-green-300 transition-colors">&gt; Projects</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-green-300 transition-colors">&gt; Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-green-300 transition-colors">&gt; Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-green-300 transition-colors">&gt; Resume</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-green-400 font-semibold mb-4">$ cat contact.txt</h3>
                            <ul className="space-y-2 text-green-500 text-sm">
                                <li>&gt; email@example.com</li>
                                <li>&gt; +1 (555) 123-4567</li>
                                <li>&gt; Location: Remote</li>
                            </ul>
                            <div className="flex items-center gap-4 mt-4">
                                <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    
                </div>
            </footer>
            <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <p className="text-green-600 mx-5">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <p className="text-green-600 font-mono mx-5">
                    [SYSTEM VERSION: 1.0.0] [UPTIME: {Math.floor(Math.random() * 100)}%]
                </p>
            </div>
        </div>
    );
}