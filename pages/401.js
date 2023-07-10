import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom401 = () => {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            // 延时 3 秒后跳转到登录页
            router.push('/login');
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [router]);

    return (
        <div>
            <h1>401 - 未授权，请重新登陆！</h1>
        </div>
    );
};

export default Custom401;
