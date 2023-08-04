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
import Link from "@mui/material/Link";

export default function PassageInfoCard({passageInfo}) {
    const date = moment(passageInfo.gmtCreate * 1000);
    const formattedDate = date.format('YYYY-MM-DD HH:mm');

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={passageInfo.avatarUrl}></Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={passageInfo.name}
                subheader={formattedDate}
            />
            {passageInfo.thumbnailUrl != null &&
            <CardMedia
                component="img"
                height="194"
                image={passageInfo.thumbnailUrl}
            />}
            <CardContent>
                <Typography variant="h5">
                    <Link style={{color: 'black', textDecoration: 'none'}} href={`/passage/${encodeURIComponent(passageInfo.id)}`}>
                        {passageInfo.title}
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {passageInfo.description}
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
