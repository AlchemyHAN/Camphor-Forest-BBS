import * as React from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import RecipeReviewCard from "@/components/RecipeReviewCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Index({navBarData, passageInfoData}) {

    return (
        <div>
            <Navbar user={navBarData}></Navbar>
            <Grid container spacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6} sx={{marginBottom: "300px"}}>
                    {passageInfoData.map((passage, index) => (
                        <Box my={1} key={index}>
                            <RecipeReviewCard key={index} passageInfo={passage} />
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>

        </div>
    );
}

export async function getServerSideProps(context) {
    let data;
    try {
        const doorKey = context.req.cookies['doorKey'];

        const response = await axios.get("/getNavbarInfo", {
            headers: {
                "Cookie": "doorKey=" + doorKey
            }
        });
        data = response.data;
    } catch (error) {
        data = null;
    }
        const responsePassageInfo = await axios.post("/getPassageInfo");

        return {
            props: {
                navBarData: data,
                passageInfoData: responsePassageInfo.data
            }, // 将响应数据作为属性传递给页面组件
        };
}
