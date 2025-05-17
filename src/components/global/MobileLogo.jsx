import Link from 'next/link';
import Image from 'next/image';
const MobileLogo = () => {
    return (
        <Link href='/'>
            <Image
                src='/assets/images/Logo tsports.svg'
                alt='Brand'
                className='w-[120px] h-auto'
                width={120}
                height={50}
            />
        </Link>
    );
};

export default MobileLogo;
