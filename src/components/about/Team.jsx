import team1 from '@/assets/team1.jpeg';
import team2 from '@/assets/team2.jpeg';
import team3 from '@/assets/team3.jpg';
import team4 from '@/assets/team4.jpg';
import Image from 'next/image';

function Team() {
    const teamMembers = [
        {
            id: 1,
            name: 'ASM Iftekharul Islam',
            designation: 'CEO',
            department: 'Executive',
            image: team1,
        },
        {
            id: 2,
            name: 'Md. Imrul Afnan',
            designation: 'CTO',
            department: 'Technology',
            image: team2,
        },
        {
            id: 3,
            name: 'Noor e Alam',
            designation: 'Developer',
            department: 'Technology',
            image: team3,
        },
        {
            id: 4,
            name: 'Emily Wilson',
            designation: 'VP of Operations',
            department: 'Operations',
            image: team4,
        },
    ];

    return (
        <section className='pb-20 bg-white container'>
            <div className='flex justify-between items-center gap-2 flex-wrap'>
                <div>
                    <p className='text-xs text-[#9ca3af] font-semibold uppercase'>Meet the team</p>
                    <h2 className='text-3xl font-bold'>Leadership Team</h2>
                    <h2 className='text-3xl font-bold mb-2'>Industry Experience</h2>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {teamMembers.map((member) => (
                    <div key={member.id} className='relative rounded-xl overflow-hidden h-[280px]'>
                        <Image
                            src={member.image}
                            alt={member.name}
                            className='w-full h-full object-cover'
                            width={400}
                            height={280}
                        />
                        <div className='absolute bottom-4 left-4 right-4'>
                            <div className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-white font-semibold'>{member.name}</p>

                                    <p className='text-white/80 text-xs'>
                                        {member.designation}, {member.department}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
