'use client';

import * as Form from 'react-hook-form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '../ui/textarea';
import { toast } from '@/hooks/use-toast';

interface FormData {
    name: string;
    companyName: string;
    email: string;
    service: string;
    category: string;
    projectDetails: string;
}

const services = [
    { label: 'Photo Editing', value: 'photo-editing' },
    { label: 'Web Design & Development', value: 'web-design-and-development' },
    { label: 'Graphics Design', value: 'graphics-design' },
    { label: 'Video Editing', value: 'video-editing' },
    { label: 'Lead Generation', value: 'lead-generation' },
];

const selectSubService = {
    'photo-editing': [
        { label: 'Background Removal', value: 'basic-photo-editing' },
        { label: 'Clipping Path', value: 'clipping-path' },
        { label: 'Color Correction', value: 'color-correction' },
        { label: 'Photo Retouching', value: 'photo-retouching' },
        { label: 'Ghost Mannequin', value: 'ghost-mannequin' },
        { label: 'Shadow Creation', value: 'shadow-creation' },
        { label: 'Product Photo Editing', value: 'product-photo-editing' },
        { label: 'Raster to Vector', value: 'rater-to-vector' },
    ],
    'graphics-design': [
        { label: 'Logo Design', value: 'logo-design' },
        { label: 'Business Cards Design', value: 'business-cards-design' },
        { label: 'Stationery Design', value: 'stationery-design' },
        { label: 'T-Shirts Design', value: 't-shirt-design' },
        { label: 'Advertisement Design', value: 'advertisement-design' },
        { label: 'Social Media Design', value: 'social-media-design' },
        { label: 'Packaging Design', value: 'packaging-design' },
        { label: 'Book Cover Design', value: 'book-cover-design' },
        { label: 'Flyer Design', value: 'flyer-design' },
    ],
};

export default function CallToActionForm() {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = Form.useForm({
        defaultValues: {
            name: '',
            companyName: '',
            email: '',
            service: '',
            category: '',
            projectDetails: '',
        },
    });

    const selectedService = watch('service');
    const hasSubServices =
        selectedService === 'photo-editing' ||
        selectedService === 'graphics-design';

    const onSubmit = async (data: FormData): Promise<void> => {
        try {
            console.log(data);
            toast({
                title: 'Success!',
                description: 'Your inquiry has been sent successfully.',
                variant: 'default',
            });
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Something went wrong. Please try again.',
                variant: 'destructive',
            });
        }
    };

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white rounded-xl flex-1 flex-grow flex-shrink basis-0 mb-6 p-4 sm:p-6 md:p-10 w-full lg:max-w-xl xl:max-w-2xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                aria-label="MVP Contact Form"
            >
                <div className="flex flex-col">
                    <Label
                        htmlFor="name"
                        className="text-black dark:text-white font-medium text-sm"
                    >
                        Name
                    </Label>
                    <Input
                        {...register('name', { required: 'Name is required' })}
                        className="border-b-2 border-black dark:border-white border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                        placeholder="Enter your name"
                        type="text"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col">
                        <Label
                            htmlFor="companyName"
                            className="text-black dark:text-white font-medium text-sm"
                        >
                            Company Name
                        </Label>
                        <Input
                            {...register('companyName', {
                                required: 'Company name is required',
                            })}
                            className="border-b-2 border-black dark:border-white border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                            placeholder="Enter your company name"
                            type="text"
                        />
                        {errors.companyName && (
                            <span className="text-red-500 text-sm">
                                {errors.companyName.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <Label
                            htmlFor="email"
                            className="text-black dark:text-white font-medium text-sm"
                        >
                            Email*
                        </Label>
                        <Input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="border-b-2 border-black dark:border-white border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col">
                        <Label
                            htmlFor="service"
                            className="text-black dark:text-white font-medium text-sm"
                        >
                            Service Required*
                        </Label>
                        <Form.Controller
                            name="service"
                            control={control}
                            rules={{ required: 'Service is required' }}
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <SelectTrigger className="border-b-2 border-black dark:border-white border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0 focus:ring-0">
                                        <SelectValue placeholder="Select your service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {services.map(
                                            ({ label, value }, index) => (
                                                <SelectItem
                                                    key={index}
                                                    value={value}
                                                >
                                                    {label}
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.service && (
                            <span className="text-red-500 text-sm">
                                {errors.service.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <Label
                            htmlFor="category"
                            className="text-black dark:text-white font-medium text-sm"
                        >
                            Category required*
                        </Label>
                        <Form.Controller
                            name="category"
                            control={control}
                            rules={{
                                required: hasSubServices
                                    ? 'Category is required'
                                    : false,
                            }}
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    disabled={!hasSubServices}
                                >
                                    <SelectTrigger className="border-b-2 border-black dark:border-white border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0 focus:ring-0">
                                        <SelectValue placeholder="Select your category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {hasSubServices &&
                                            selectSubService[
                                                selectedService
                                            ].map(({ label, value }, index) => (
                                                <SelectItem
                                                    key={index}
                                                    value={value}
                                                >
                                                    {label}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.category && (
                            <span className="text-red-500 text-sm">
                                {errors.category.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <Label
                        htmlFor="projectDetails"
                        className="text-black dark:text-white font-medium text-sm"
                    >
                        Project details*
                    </Label>
                    <Textarea
                        {...register('projectDetails', {
                            required: 'Project details are required',
                        })}
                        className="border-b-2 border-black dark:border-white border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                        placeholder="Tell us more about your idea"
                    />
                    {errors.projectDetails && (
                        <span className="text-red-500 text-sm">
                            {errors.projectDetails.message}
                        </span>
                    )}
                </div>

                <div className="text-start">
                    <button
                        type="submit"
                        className="bg-black dark:bg-white rounded-full py-3 px-8 md:py-4 md:px-12 text-white dark:text-black text-base md:text-lg font-medium cursor-pointer hover:bg-gray-800"
                    >
                        Send inquiry
                    </button>
                </div>
            </form>
        </section>
    );
}
