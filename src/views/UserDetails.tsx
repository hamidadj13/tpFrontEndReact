import React, {useCallback, useEffect, useState} from 'react';
import DashboardLayout from '../layouts/Dashboard';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useParams, useNavigate } from 'react-router-dom';
import { User } from '../types/User';
import { usersApi } from '../api/users-api';
import { Error } from '../types/Error';

const UserDetails = (): JSX.Element => {

    let { id } = useParams();
    let navigate = useNavigate();

    const [user, setUser] = useState<User>({
        avatar: '',
        email: '',
        id: 0,
        name: '',
        role: ''
    });

    const [isEditUser, setIsEditUser] = useState<boolean>(false);

    const [errorObj, setErrorObj] = useState<Error>({
        error: false,
        message: ''
    });

    const [isDeleteUser, setIsDeleteUser] = useState<boolean>();

    const handleEditUser = async() => 
    {
        setIsEditUser(!isEditUser);
        
        if (isEditUser && user.id) 
        {
            try
            {
               const userResponse = await usersApi.updateUser(user.id, user);

               if ('error' in userResponse && userResponse.error) 
               {
                    setErrorObj ({
                        error: userResponse.error,
                        message: userResponse.message
                    })
               }
               console.log(userResponse);
            } 
            catch (e) 
            {
                console.log(e)
            }
            
        }
    }

    const handleDeleteUser = async() => {
       //setIsDeleteUser(false);
        if(user.id) {
            await usersApi.deleteUser(user.id);
            navigate('/users');
        }
        
    }

    const getUserById = useCallback(async () => {
        if (id) {
            const userResponse = await usersApi.getUserById(id);
            setUser(userResponse);
        }
    }, []);

    useEffect(() => {
        getUserById();
    }, []);

  return (
    <DashboardLayout>
        <Box
            display="flex"
            justifyContent="center"
        >
            <Stack spacing={2}>
                { errorObj.error && (<Alert severity="error">{errorObj.message}</Alert> ) }
                <Card
                    variant="outlined"
                    sx={{
                        width: 500,
                        background: 'linear-gradient(90deg, #8360c3, #2ebf91)', 
                        textAlign: 'center',
                        borderRadius: '2rem',
                        alignItem: "center"
                    }}
                >
                    <Avatar
                        alt={user.name}
                        sx={{ display: "flex", margin: "auto", width: 70, height: 70 }}
                        src= {user.avatar}
                    >
                    H</Avatar>
                    <Typography variant="h6" gutterBottom>
                        <strong>User ID:</strong> {user.id}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <strong>Name: {' '}</strong> 
                        {isEditUser ? (<TextField 
                                            variant="outlined"                                             
                                            size="small"
                                            value={user.name} 
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setUser({
                                                ...user,            //permet lors du changement de nom de ne pas supprimer les autres valeurs
                                                name: event.target.value
                                            })}} />)
                                    : user.name
                        }
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <strong>Email:</strong>
                        {isEditUser ? (<TextField 
                                            variant="outlined"                                             
                                            size="small"
                                            value={user.email} 
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setUser({
                                                ...user,            //permet lors du changement de nom de ne pas supprimer les autres valeurs
                                                email: event.target.value
                                            })}} />)
                                    : user.email
                        }
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <strong>Role:</strong>
                        {isEditUser ? (<TextField 
                                            variant="outlined"                                             
                                            size="small"
                                            value={user.role} 
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setUser({
                                                ...user,            //permet lors du changement de nom de ne pas supprimer les autres valeurs
                                                role: event.target.value
                                            })}} />)
                                    : user.role
                        }
                    </Typography>

                </Card>

                <Stack spacing={2} direction='row' justifyContent='center'>
                
                    <Button 
                        variant="contained" 
                        color="success"
                        onClick={handleEditUser}
                    > 
                        {isEditUser ? 'Save' : 'Edit'}
                    </Button>

                    <Button 
                        variant="contained" 
                        color="error"
                        onClick={handleDeleteUser}
                    > 
                        Delete
                    </Button>
                </Stack>
                

            </Stack>

      </Box>
    </DashboardLayout>
  );
};

export default UserDetails;
