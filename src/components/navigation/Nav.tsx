'use client'

import Link from "next/link"
import Image from "next/image";
import LoggedInNav from "@components/navigation/LoggedInNav"
import LoggedOutNav from "@components/navigation/LoggedOutNav";

const Nav = () => {

    const isUserLoggedIn = true

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link className="flex gap-2 flex-center" href="/">
                <Image src="/assets/images/logo.svg" alt="Imagine logo" width={50} height={50}
                       className="object-contain"/>
                <p className="logo_text">
                    Imagine
                </p>
            </Link>
            {/* Desktop Navigation */}

            {isUserLoggedIn ?
                (<LoggedInNav/>) :
                (<LoggedOutNav/>)}

        </nav>
    )
}

export default Nav
