import Link from 'next/link';
import Image from 'next/image';
const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src='/assets/images/Logo tsports.svg'
                alt='Brand'
                className='w-[160px] h-auto'
                width={170}
                height={60}
            />
        </Link>
    );
};

export default Logo;
