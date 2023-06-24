"use client"

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const LoggedInNav = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <div className="md:flex hidden">
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Criar Prompt
                    </Link>
                    <button type="button" className="outline_btn">
                        Sair
                    </button>
                    <Link href="/profile">
                        <Image src="/assets/images/profile.svg" alt="Profile" width={50} height={50}
                               className="rounded-full"/>
                    </Link>
                </div>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden flex relative">
                <Image src="/assets/images/profile.svg" alt="Profile" width={40} height={40}
                       className="rounded-full" onClick={() => setToggleDropdown(!toggleDropdown)}/>
                <div className='flex'>
                    {toggleDropdown && (<div className="dropdown shadow-2xl">
                        <Link href="/Profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                            Meu Perfil
                        </Link>
                        <Link
                            href='/create-prompt'
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}
                        >
                            Criar Prompt
                        </Link>
                        <button
                            type='button'
                            onClick={() => {
                                setToggleDropdown(false);
                            }}
                            className='mt-5 w-full black_btn'
                        >
                            Sair
                        </button>
                    </div>)}
                </div>
            </div>
        </>

    )
}
export default LoggedInNav
