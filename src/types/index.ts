export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    qualification: string;
    experience: string;
    image: string;
    availability: string[];
    schedule?: { day: string; time: string }[];
    availableToday?: boolean;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface NavItem {
    label: string;
    href: string;
}
