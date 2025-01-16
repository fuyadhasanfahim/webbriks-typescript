'use client';

import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { Button } from '../ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { companyLogo } from '@/assets';

const services = [
    {
        title: 'Photo Editing',
        href: '/services/photo-editing',
        description:
            'Professional photo editing services to enhance your images.',
    },
    {
        title: 'Web Design & Development',
        href: '/services/web-design-development',
        description:
            'Custom web design and development tailored to your needs.',
    },
    {
        title: 'Graphics Design',
        href: '/services/graphics-design',
        description: 'Creative graphics design for branding and marketing.',
    },
    {
        title: 'Video Editing',
        href: '/services/video-editing',
        description: 'High-quality video editing for your projects.',
    },
    {
        title: 'Lead Generation',
        href: '/services/lead-generation',
        description:
            'Effective lead generation strategies to grow your business.',
    },
];

export default function Navbar() {
    const { theme } = useTheme();
    console.log(theme);

    return (
        <nav className="bg-background backdrop-blur z-50 shadow-sm">
            <div className="container py-4">
                <div className="flex items-center justify-between space-x-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={
                                theme === 'light'
                                    ? companyLogo.light
                                    : companyLogo.dark
                            }
                            alt={companyLogo.alt}
                            width={171}
                            height={30}
                        />
                    </Link>

                    <NavigationMenu className="font-montserrat font-medium hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link href="/services">Services</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {services.map((service) => (
                                            <ListItem
                                                key={service.title}
                                                title={service.title}
                                                href={service.href}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about-us" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        About Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blogs" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Blogs
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    href="/contact-us"
                                    legacyBehavior
                                    passHref
                                >
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Contact Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <div className="block lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline">
                                        <Menu />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side={'left'}
                                    className="font-montserrat font-medium"
                                >
                                    <SheetHeader>
                                        <Link href={'/'}>
                                            <Image
                                                src={
                                                    theme === 'light'
                                                        ? companyLogo.light
                                                        : companyLogo.dark
                                                }
                                                alt={companyLogo.alt}
                                                width={171}
                                                height={30}
                                            />
                                        </Link>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="flex flex-col space-y-2">
                                            <h3 className="text-sm font-medium">
                                                Services
                                            </h3>
                                            <ul className="space-y-2">
                                                {services.map((service) => (
                                                    <li
                                                        key={service.title}
                                                        className="pl-2"
                                                    >
                                                        <Link
                                                            href={service.href}
                                                            className="text-sm text-muted-foreground hover:text-primary"
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col space-y-2">
                                            <Link
                                                href="/about-us"
                                                className="text-sm font-medium hover:text-primary"
                                            >
                                                About Us
                                            </Link>
                                            <Link
                                                href="/contact-us"
                                                className="text-sm font-medium hover:text-primary"
                                            >
                                                Contact Us
                                            </Link>
                                            <Link
                                                href="/pricing"
                                                className="text-sm font-medium hover:text-primary"
                                            >
                                                Pricing
                                            </Link>
                                            <Link
                                                href="/blogs"
                                                className="text-sm font-medium hover:text-primary"
                                            >
                                                Blogs
                                            </Link>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <SheetClose asChild></SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
