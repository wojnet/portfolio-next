const PostSkeleton = () => {
    return (
        <div className="w-full flex flex-1 flex-col">
            <div className="w-full h-8 bg-slate-300 rounded-lg animate-pulse my-11"></div>
            <div className="w-full h-4 bg-slate-300 rounded-lg animate-pulse [animation-delay:_-200ms] mb-2"></div>
            <div className="w-full h-4 bg-slate-300 rounded-lg animate-pulse [animation-delay:_-400ms] mb-2"></div>
            <div className="w-full h-4 bg-slate-300 rounded-lg animate-pulse [animation-delay:_-600ms] mb-2"></div>
            <div className="w-full h-4 bg-slate-300 rounded-lg animate-pulse [animation-delay:_-800ms] mb-4"></div>
            <div className="w-1/3 h-4 bg-slate-300 rounded-lg animate-pulse [animation-delay:_-1000ms] mb-2"></div>
            <div className="w-full h-[300px] bg-slate-300 rounded-lg mt-[20px] animate-pulse [animation-delay:_-1200ms] mb-[10px]"></div>
            <div className="w-full h-8 bg-slate-300 rounded-lg animate-pulse [animation-delay:_-1400ms] mt-11"></div>
        </div>
    );
}

export default PostSkeleton;