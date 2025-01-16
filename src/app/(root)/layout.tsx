import { ReactNode } from 'react';
import Navbar from '@/components/shared/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section>
            <header>
                <Navbar />
            </header>
            <main className="font-inter">{children}</main>
        </section>
    );
}
