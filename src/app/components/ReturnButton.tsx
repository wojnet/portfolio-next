"use client"
import { FC } from 'react';
import { useRouter } from 'next/navigation';

const ReturnButton: FC = () => {
    const router = useRouter();

    const onReturn = () => {
        router.back();
    }

    return (
        <button
            className="bg-slate-300 text-[12px] rounded-md p-[2px_10px] hover:opacity-75 transition"
            onClick={onReturn}
        >
            ↩ RETURN
        </button>
    );
}

export default ReturnButton;