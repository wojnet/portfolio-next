import { FC } from 'react';

const PostTileSkeleton: FC = () => {
    return (
        <div className="w-[300px] flex flex-col items-center h-auto p-[12px]"> {/* hover:outline hover:outline-[1px] hover:outline-gray-text hover:rounded-[30px] */}
            <div className="w-full h-[220px] bg-slate-300 rounded-[25px] mb-[20px] animate-pulse"></div>
            <div className="w-full h-[22px] bg-slate-300 rounded-[25px] mb-[15px] animate-pulse [animation-delay:_-200ms]"></div>
            <div className="w-full h-[19px] bg-slate-200 rounded-[25px] mb-[15px] animate-pulse [animation-delay:_-400ms]"></div>
            <div className="w-full h-[19px] bg-slate-200 rounded-[25px] mb-[15px] animate-pulse [animation-delay:_-600ms]"></div>
            <div className="w-full h-[19px] bg-slate-200 rounded-[25px] mb-[15px] animate-pulse [animation-delay:_-800ms]"></div>
            <div className="w-full h-[19px] bg-slate-200 rounded-[25px] mb-[15px] animate-pulse [animation-delay:_-1000ms]"></div>
        </div>
    );
}

export default PostTileSkeleton;