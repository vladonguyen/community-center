import Image from "next/legacy/image"

export const Cover = ({ children, background }) => {
    return <div className="h-screen text-white bg-slate-800 relative min-h[400px] flex justify-center">
        <Image 
        alt="Cover" 
        src={background} 
        layout="fill" 
        className="mix-blend-soft-light object-cover" 
        priority
        />
       <div className="max-w-5xl z-10 content-center">{children}</div> 
        </div>
}