import { ReactNode } from 'react';
import NavbarWrapper from '@/components/shared/NavbarWrapper';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section>
            <NavbarWrapper />
            <main className="font-inter">{children}</main>
            <Toaster />
        </section>
    );
}
