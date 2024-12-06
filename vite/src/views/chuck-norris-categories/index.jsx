import React ,{ useEffect, useState } from 'react';
import { fetcher } from 'utils/fetcher';
// project imports //
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

// ==============================|| Jock Categories PAGE ||============================== //

const JockCategories = () => {

    const [jockCategories, setJockCategories] = useState([]);
    const [randomCategory, setRandomCategory] = useState({
        categories: [],
        created_at: '',
        icon_url: '',
        id: '',
        updated_at: '',
        url: '',
        value: '',
    });
    const [open, setOpen] = useState(false);

    const handlingCategory = async category => {
        const response = await fetcher(`/jokes/random?category=${category}`);
        setRandomCategory(response);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetcher(`/jokes/categories`);
                setJockCategories(response);
            } catch (error) {
                setOpen(true);
            }
        };
        fetchData();
    }, []); 

    return (
        <MainCard title="Jock Categories List">
            <Grid container spacing={1}>
            {jockCategories.length !== 0 &&
                        jockCategories.map((joke) => (
                            <Stack 
                                key={`${joke}-${Math.random()}`} 
                                direction="row" 
                                spacing={3} 
                                alignItems="center"
                            >
                                <Chip 
                                    label={joke} 
                                    clickable
                                    variant={`${randomCategory.categories.includes(joke) ? 'outlined' : ''}`}
                                    size="small" 
                                    sx={{ cursor: 'pointer' }} 
                                    onClick={() => handlingCategory(joke)} 
                                />
                            </Stack>
                    ))}
            {randomCategory.value !== '' && (
                <Card sx={{ bgcolor: 'background.paper' }}>
                    <CardContent>
                        <CardHeader
                            avatar={
                                <Avatar 
                                    alt={randomCategory.value} 
                                    src={randomCategory.icon_url}
                                    sx={{ width: 56, height: 56 }}
                                />
                            }
                            title={randomCategory.value}
                            subheader={randomCategory.created_at}
                            data-testid="category-title-test-id"
                        />
                    </CardContent>
                </Card>
                )}
            </Grid>
            <Dialog 
                onClose={handleClose}
                data-testid="category-dialog-test-id"
                open={open} 
                maxWidth="xs"
            >
                <DialogTitle data-testid="dialog-title-test-id">No Category Found</DialogTitle>
            </Dialog>
        </MainCard>
      )
};

export default JockCategories;
