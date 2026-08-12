import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ContactFormData {
    fullName: string;
    phone: string;
    subject: string;
    message: string;
}

export function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        setTimeout(() => {
            setIsSuccess(false);
        }, 5000);
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-soft h-full relative overflow-hidden">
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-text mb-2">Message Sent!</h3>
                        <p className="text-muted">Thank you for reaching out. Our team will get back to you shortly.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <h3 className="font-heading font-bold text-2xl mb-6 text-primary">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        {...register("fullName", { required: "Full name is required" })}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                            errors.fullName ? "border-red-500" : "border-border"
                        )}
                        placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Please enter a valid 10-digit number"
                            }
                        })}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                            errors.phone ? "border-red-500" : "border-border"
                        )}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                            errors.subject ? "border-red-500" : "border-border"
                        )}
                        placeholder="How can we help you?"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Your Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        {...register("message", { required: "Message is required" })}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none",
                            errors.message ? "border-red-500" : "border-border"
                        )}
                        placeholder="Provide any details here..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting}>
                    Send Message
                </Button>
            </form>
        </div>
    );
}
