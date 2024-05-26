import React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { User } from '../types/User';
import { useNavigate } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

interface UserCardProps {
    user: User;
};


const UserCard = ({ user }: UserCardProps): JSX.Element => {

    const navigate = useNavigate();
    const handleCardClick = () =>{
        navigate(`/users/${user.id}`);
    };

    return (
        
     /*   <Card 
            variant="outlined"
            sx={{ 
                borderRadius: '2rem',
                width: 310,
                minHeight: 130,
                maxHeight: 130,
                borderColor: 'blue',
                cursor: 'pointer' }}
            onClick={handleCardClick} >
            
            <CardContent>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        sx={{ width: 56, height: 56 }}
                        src= {user.avatar}
                    >
                        H</Avatar>
                    <Stack>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {user.role}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {user.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {user.email}
                        </Typography>
                    </Stack>
                </Stack>
               
            </CardContent>
        </Card>
    );*/

    
    <Card 
        variant="outlined"
        sx={{ 
            borderRadius: '1.5rem',
            boxShadow: "5px 3px 3px #4527a0",
            //width: '23%',
            minHeight: 300,
            maxHeight: 300,
            cursor: 'pointer' }}
        onClick={handleCardClick} 
    >
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={user.avatar}
              alt={user.name}
            />
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {user.role}
            </Typography>
            <Typography variant="h5" component="div">
                {user.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user.email}
            </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
    );
}

export default UserCard;