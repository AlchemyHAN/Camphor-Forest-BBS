import * as React from "react";
import axios from "axios";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Navbar from "@/components/navbar";

export default function Index({data}){

    return (
        <Navbar user={data}></Navbar>
    );
}

export async function getServerSideProps(context) {
    try {
        const doorKey = context.req.headers.cookie.split("=")[1];
        console.log(doorKey);
        const response = await axios.get("/getNavbarInfo", {
            headers: {
                "Cookie": "doorKey="+doorKey
            }});
        console.log(response.data);
        return {
            props: {
                data: response.data
            }, // 将响应数据作为属性传递给页面组件
        };
    } catch (error) {
        // 处理错误
        console.error(error);
        return {
            props: {
                data: "Error",
            },
        };
    }
}
