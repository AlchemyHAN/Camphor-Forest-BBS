import { useRouter } from 'next/router';
import Grid from "@mui/material/Grid";
import PassageCard from "@/components/PassageCard";

function Passage() {
    const router = useRouter();
    const { passageId } = router.query;

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。
            </Grid>
            <Grid item xs={8}>
                <PassageCard />
            </Grid>
            <Grid item xs={2}>
                壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。壬戌之秋，岁在癸丑。
            </Grid>
        </Grid>
    );
}

export default Passage;