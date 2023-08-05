import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ReplyIcon from '@mui/icons-material/Reply';
import Button from "@mui/material/Button";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


export default function PassageCard({passageData}) {
    const date = moment(passageData.gmtCreate * 10000);
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
                <Grid container>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="space-between"  borderBottom="1px solid #3f51b5">
                            <Typography variant="h4">
                                <Box component="span" fontWeight='fontWeightMedium'>{passageData.title}</Box>
                            </Typography>
                            <Box>
                                <Button variant="outlined" sx={{mx: 2}} startIcon={<StarBorderIcon />}>
                                    收藏
                                </Button>
                                <Button variant="outlined" startIcon={<ReplyIcon />}>
                                    回复
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2} justifyContent="center">
                        <Box bgcolor="#f6f7fb">
                            <Box display="flex" justifyContent="center">
                                <Avatar
                                    src={passageData.author.avatarUrl}
                                    sx={{ width: 128, height: 128, textAlign: "center"}}/>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Link href="" align="center" sx={{textDecoration: "none"}}>{passageData.author.name}</Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box px={1}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} children={passageData.content} />
                        </Box>
                    </Grid>
                    <Grid item xs={2} bgcolor="#f6f7fb">
                        排行榜功能待做
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{
                 display: "flex",
             }}>
                <Box justifyContent="space-between" display="flex" flex={1}>
                    <Box>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </Box>
                    <Box display="flex">
                        <Typography sx={{mx: 1}}>1楼</Typography>
                        <Typography sx={{mx: 1}}>{formattedDate}</Typography>
                        <Typography sx={{ml: 1}}>IP属地：重庆</Typography>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}
