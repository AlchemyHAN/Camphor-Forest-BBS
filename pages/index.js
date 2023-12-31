import * as React from "react";
import axios from "axios";
import PassageInfoCard from "@/components/PassageInfoCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Index({passageInfoData}) {

    return (
            <Grid container spacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    {passageInfoData.map((passage, index) => (
                        <Box my={1} key={index}>
                            <PassageInfoCard key={index} passageInfo={passage} />
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
    );
}

export async function getServerSideProps(context) {
    const doorKey = context.req.cookies['doorKey'];

    if (doorKey == null) {
        return {
            redirect: {
                permanent: false,
                destination: '/login',
            },
        };
    }

    const responsePassageInfo = await axios.get("/passage/articleList", {
        headers: {
            "Cookie": "doorKey=" + doorKey
        }
    });
    return {
        props: {
            passageInfoData: responsePassageInfo.data
        }, // 将响应数据作为属性传递给页面组件
    };
}
