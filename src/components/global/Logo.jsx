import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src={logo}
                alt='Brand'
                className='w-[50px] h-auto'
                width={50}
                height={50}
            />
        </Link>
    );
};

export default Logo;
