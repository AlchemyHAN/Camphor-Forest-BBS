import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function PassageCard({Passage}) {
    const date = moment(1);
    const formattedDate = date.format('YYYY-MM-DD HH:mm');

    return (
        <Card>
            {/*{passageInfo.thumbnailUrl != null &&*/}
            {/*    <CardMedia*/}
            {/*        component="img"*/}
            {/*        height="194"*/}
            {/*        image={passageInfo.thumbnailUrl}*/}
            {/*    />}*/}
            <CardContent>
                <Grid container sx={{'--Grid-borderWidth': '3px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderLeft: 'var(--Grid-borderWidth) solid',
                    borderColor: 'red',
                    '& > div': {
                        borderRight: 'var(--Grid-borderWidth) solid',
                        borderBottom: 'var(--Grid-borderWidth) solid',
                        borderColor: 'red',
                    },}}>
                    <Grid item xs={2}>
                        <Box display="flex"
                             justifyContent="center">
                            <Avatar
                                src="https://picx.zhimg.com/80/v2-1e013030628fe38046c8b08ed15e1e7f_1440w.webp"
                                sx={{ width: 128, height: 128, textAlign: "center"}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={10}><Typography variant="h4"><Box component="span" fontWeight='fontWeightMedium'>啊十九大莱克斯顿</Box></Typography></Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
