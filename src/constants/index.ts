import { NavItem } from '@/types';

export const CLINIC_INFO = {
    name: 'Shiv Sandhya Clinic',
    address: 'Ram Sakal Market, First Floor, Saket Vihar More, Anishabad, Patna, Bihar 800002',
    phone: '7033166941 / 9430946158',
    email: 'contact@shivsandhyaclinic.com',
    workingHours: 'Mon - Fri: 08:00 AM - 10:00 AM & 04:00 PM - 08:00 PM | Sun: Open | Sat: Closed',
};

export const NAV_LINKS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Schedule', href: '/#schedule' },
    { label: 'Contact', href: '/contact' },
];

export const TIMELINE_DATA = [
    { year: '2015', title: 'Clinic Foundation', description: 'Established with a vision to provide premium healthcare.' },
    { year: '2018', title: 'Expanded Services', description: 'Added specialized departments for Orthopedics and Skin.' },
    { year: '2023', title: 'Modern Facilities', description: 'Upgraded to a fully equipped modern OPD center.' },
];
