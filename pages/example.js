import service from "@/api/service";

function ProtectedPage({ data }) {
    // 页面渲染逻辑

    return (
        <div>
            {/* 页面内容 */}
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const response = await service("get", '/protected-resource'); // 向受保护的资源发送请求
        return {
            props: { data: response.data }, // 将响应数据作为属性传递给页面组件
        };
    } catch (error) {
        // 处理错误
        console.error(error);
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}

export default ProtectedPage;
