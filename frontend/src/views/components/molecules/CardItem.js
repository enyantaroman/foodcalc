import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardItem = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345, borderRadius: '20px' }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image='storage/images/free.jpg'
                    alt="logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        カード名
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CardItem;