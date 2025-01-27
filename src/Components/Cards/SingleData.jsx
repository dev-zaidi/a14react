import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SingleData({title,description,image,price,rating,category,name,username,email,address}) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 240 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography>
          {title || name}
        </Typography>
        <Typography>
         {category || username}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description || email}  
        </Typography>
        <Typography>
         {price || address}
        </Typography>
        <Typography>
         {rating}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
