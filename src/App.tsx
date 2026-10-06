import { Code2 } from 'lucide-react'

export default function App() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <Code2 className="h-24 w-24 text-white" />
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Vite + React + TS
            </h1>
        </div>
    )
}