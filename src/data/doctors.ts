import { Doctor } from '@/types';

export const doctorsData: Doctor[] = [
    {
        id: '1',
        name: 'Dr. Shiv Shankar',
        specialty: 'Critical Care Medicine',
        qualification: 'MBBS (PAT), MID (IMS BHU) P.D.C.C. (Critical Care Medicine IGIMS, Patna)',
        experience: 'Ex-Sr. AIIMS Patna, Ex-SR BHU, SR IGIMS',
        availableToday: true,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        schedule: [
            { day: 'Mon-Sun', time: '8:00 AM - 10:00 AM & 4:00 PM - 8:00 PM' }
        ]
    },
    {
        id: '2',
        name: 'Dr. Pappu Kumar',
        specialty: 'Orthopedic Expert',
        qualification: 'MBBS-Patho, MS (Ortho) AMU',
        experience: 'Ex-SR Paras HMRI, Patna, Ex-Sr. PMCH, Patna',
        availableToday: true,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        schedule: [
            { day: 'Mon-Sun', time: '8:00 AM - 10:00 AM & 4:00 PM - 8:00 PM' }
        ]
    },
    {
        id: '3',
        name: 'Dr. Om Prakash Kumar',
        specialty: 'General Physician & Critical Care',
        qualification: 'General Physician, Critical Care',
        experience: 'Specialist',
        availableToday: true,
        image: 'https://images.unsplash.com/photo-1594824438436-ce13be1a76c6?q=80&w=2070&auto=format&fit=crop',
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        schedule: [
            { day: 'Mon-Sun', time: '8:00 AM - 10:00 AM & 4:00 PM - 8:00 PM' }
        ]
    },
    {
        id: '4',
        name: 'Dr. Sandhya',
        specialty: 'Specialist OPD',
        qualification: 'M.D.',
        experience: 'Specialist',
        availableToday: true,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        schedule: [
            { day: 'Mon-Sun', time: '8:00 AM - 10:00 AM & 4:00 PM - 8:00 PM' }
        ]
    }
];
