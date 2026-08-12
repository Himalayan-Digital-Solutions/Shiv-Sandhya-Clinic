import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface GalleryCardProps {
    image: string;
    alt: string;
    className?: string;
}

export function GalleryCard({ image, alt, className }: GalleryCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className={cn("overflow-hidden rounded-2xl shadow-soft relative group cursor-pointer", className)}
        >
            <img
                src={image}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border-2 border-white/50 px-4 py-2 rounded-full font-medium backdrop-blur-sm">View Larger</span>
            </div>
        </motion.div>
    );
}
