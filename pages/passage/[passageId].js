import Grid from "@mui/material/Grid";
import PassageCard from "@/components/PassageCard";
import axios from "axios";
import Box from "@mui/material/Box";

export default function Passage({Passage}) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10}>
                <Box my={1}>
                    <PassageCard passageData={Passage} />
                </Box>
            </Grid>
            <Grid item xs={1}>

            </Grid>
        </Grid>
    );
}
export async function getServerSideProps(context) {
    const passageId  = context.query.passageId;
    console.log(passageId);
    const doorKey = context.req.cookies['doorKey'];
    if (doorKey == null) {
        return {
            redirect: {
                permanent: false,
                destination: '/login',
            },
        };
    }

    const response = await axios.get("/passage/" + passageId, {
        headers: {
            "Cookie": "doorKey=" + doorKey
        }
    });
    return {
        props: {
            Passage: response.data
        }, // 将响应数据作为属性传递给页面组件
    };
}

