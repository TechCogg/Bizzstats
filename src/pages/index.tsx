import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard'); // Redirect to dashboard
    }, [router]);

    return null; // Render nothing while redirecting
}
