import RootContactUsPage from '@/components/root/contact-us/RootContactUsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Webbriks',
    description: 'Generated by create next app',
};

export default async function ContactUs() {
    return <RootContactUsPage />;
}
