import { Navigation } from 'lucide-react';
import { cn } from '@/utils/cn';

interface MapEmbedProps {
    className?: string;
}

export function MapEmbed({ className }: MapEmbedProps) {
    return (
        <div className={cn("w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-soft relative group", className)}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14392.348123!2d85.10!3d25.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58!2sAnishabad%2C%20Patna!5e0!3m2!1sen!2sin!4v1610000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="grayscale hue-rotate-180 opacity-90 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
            ></iframe>
            <a href="https://goo.gl/maps/" target="_blank" rel="noreferrer" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform z-10 border border-border/50">
                <Navigation className="w-5 h-5 fill-current" /> Open in Maps
            </a>
        </div>
    );
}
