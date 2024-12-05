import { useEffect, useState } from 'react';
import { fetcher } from 'utils/axios';
// project imports //
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

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

    const handlingCategory = async category => {
        console.log(category, 'joke category');
        const response = await fetcher(`/jokes/random?category=${category}`);
        console.log(response, 'response');
        setRandomCategory(response);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetcher(`/jokes/categories`);
            setJockCategories(response);
        };
        fetchData();
    }, []); 

    return (
        <MainCard title="Jock Categories List">
            <Grid container spacing={1}>
            <Grid size={4}>
                <List sx={{ bgcolor: 'background.paper' }}>
                    {jockCategories.length !== 0 &&
                    jockCategories.map((joke, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => handlingCategory(joke)}>
                                <ListItemText primary={joke} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                </Grid>
                <Grid size={8}>
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
                        />
                    </CardContent>
                </Card>
                )}
                </Grid>
            </Grid>
        </MainCard>
      )
};

export default JockCategories;
