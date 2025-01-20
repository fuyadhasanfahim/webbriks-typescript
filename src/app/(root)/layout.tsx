import { ReactNode } from 'react';
import NavbarWrapper from '@/components/shared/NavbarWrapper';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section>
            <NavbarWrapper />
            <main className="font-inter">{children}</main>
        </section>
    );
}
