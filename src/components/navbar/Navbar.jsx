import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 py-7 border-b border-gray-200">

            {/* Left Side */}
            <div className="flex items-center gap-14">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo-eventflow.svg"
                        alt="logo"
                        width={140}
                        height={20}
                    />
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-10 font-bold text-sm">
                    <Link href="/">Discover</Link>
                    <Link href="/">Categories</Link>
                    <Link href="/">Organisers</Link>
                    <Link href="/">Pricing</Link>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-16">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search events..."
                    className="outline-none border-none text-sm placeholder:text-gray-500"
                />

                {/* Buttons */}
                <div className="flex items-center gap-10 font-bold text-sm">
                    <button>Sign in</button>

                    <button>Request access</button>
                </div>
            </div>
        </nav>
    );
}