import { forwardRef } from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { CalendarCheck } from 'lucide-react';
import { cn } from '@/utils/cn';

interface AppointmentButtonProps extends ButtonProps {
    showIcon?: boolean;
}

export const AppointmentButton = forwardRef<HTMLButtonElement, AppointmentButtonProps>(
    ({ className, showIcon = true, children = 'Book Appointment', onClick, ...props }, ref) => {
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (onClick) {
                onClick(e);
            } else {
                const whatsappUrl = `https://wa.me/917033166941?text=${encodeURIComponent("Hello! I would like to book an appointment.")}`;
                window.open(whatsappUrl, '_blank');
            }
        };

        return (
            <Button
                ref={ref}
                variant="primary"
                className={cn(
                    "bg-gradient-to-r from-primary to-accent hover:shadow-[0_8px_20px_rgba(93,173,226,0.3)] transition-all duration-300 text-white border-0",
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                {showIcon && <CalendarCheck className="w-5 h-5 mr-2" />}
                {children}
            </Button>
        );
    }
);
AppointmentButton.displayName = 'AppointmentButton';
