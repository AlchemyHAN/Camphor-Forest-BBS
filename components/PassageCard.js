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

export default function PassageCard({Passage}) {
    const date = moment(1);
    const formattedDate = date.format('YYYY-MM-DD HH:mm');

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src="https://picx.zhimg.com/80/v2-1e013030628fe38046c8b08ed15e1e7f_1440w.webp"></Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="用户名"
                subheader={formattedDate}
            />
            {/*{passageInfo.thumbnailUrl != null &&*/}
            {/*    <CardMedia*/}
            {/*        component="img"*/}
            {/*        height="194"*/}
            {/*        image={passageInfo.thumbnailUrl}*/}
            {/*    />}*/}
            <CardContent>
                <Typography variant="h5">
                    标题
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    描述
                </Typography>
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
