import React, { useEffect, useState } from 'react';
import { fetcher } from 'utils/fetcher';
// project imports //
import MainCard from 'ui-component/cards/MainCard';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

// ==============================|| Jock PAGE ||============================== //

const JockPage = () => {

    const [joke, setJoke] = useState({
        categories: [],
        created_at: '',
        icon_url: '',
        id: '',
        updated_at: '',
        url: '',
        value: '',
    });
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetcher(`/jokes/random`);
                setJoke(response);
            } catch (error) {
                console.log(error, 'error');
            }
        };
        fetchData();
    }, []); 

    return (
        <MainCard title="Jock Card">
          <CardHeader
                avatar={
                    <Avatar 
                        alt={joke.value} 
                        src={joke.icon_url}
                        sx={{ width: 56, height: 56 }}
                    />
                }
                title={joke.value}
                subheader={joke.created_at}
            />
            <Dialog 
                onClose={handleClose}
                data-testid="joke-dialog-test-id"
                open={open} 
                maxWidth="xs"
            >
                <DialogTitle>No Joke Found</DialogTitle>
            </Dialog>
        </MainCard>
      )
};

export default JockPage;
