'use client'
import { ArrowUp } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="text-white py-8 mb-6 md:mb-0 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center pt-6">
                    <p className="text-zinc-400 text-sm">&copy; {currentYear} Ayush. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-16 md:bottom-5 right-5 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 z-50"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-1"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64  rounded-full filter blur-3xl opacity-10 -z-10"></div>
        </footer>
    )
}

