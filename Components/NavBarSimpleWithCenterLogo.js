import Image from 'next/image'

const NavBarSimpleWithCenterLogo = () => {
    return (
        <nav className='navbar justify-content-center'>
            <Image
                src="/logo.png"
                alt="Picture of the author"
                width={100}
                height={100}
            />
        </nav>
    );
}

export default NavBarSimpleWithCenterLogo;
