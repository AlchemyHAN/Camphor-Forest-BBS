import { useRouter } from 'next/router';
import Grid from "@mui/material/Grid";
import PassageCard from "@/components/PassageCard";

function Passage() {
    const router = useRouter();
    const { passageId } = router.query;

    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>
                永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。
            </Grid>
            <Grid item xs={10}>
                <PassageCard />
            </Grid>
            <Grid item xs={1}>
                永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。永和九年，岁在癸丑。
            </Grid>
        </Grid>
    );
}

export default Passage;
