"use client"
import { useEffect } from 'react';
import service from '@/api/service';

export default function Custom1235d6() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("d6");
                const response = await service("get", '/getNavbarInfo');
                console.log(response.data.avatarUrl);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    console.log('1235d6');

    return <h1>1235d6</h1>;
}
