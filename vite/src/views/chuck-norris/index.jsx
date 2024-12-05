import React, { useEffect, useState } from 'react';
import { fetcher } from 'utils/fetcher';
// project imports //
import MainCard from 'ui-component/cards/MainCard';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';



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

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetcher(`/jokes/random`);
            setJoke(response);
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
        </MainCard>
      )
};

export default JockPage;
