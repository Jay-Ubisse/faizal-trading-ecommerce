'use client'

import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export const WhatsappButton = () => {
    return(
        <div className="bg-emerald-400 text-white w-16 h-16 rounded-[50%] fixed bottom-5 right-5 flex justify-center items-center">
            <Link href="https://wa.me/258848839501" target="_blank">
                <WhatsappLogo size={32} />
            </Link>
        </div>
    );
}