// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { useEffect, useState } from 'react';
import { fetcher } from 'utils/axios';


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
            const response = await fetcher('/jokes/random');
            setJoke(response);
        };
        fetchData();
    }, []); 
    console.log(joke, 'joke random');
    return (
        <MainCard title="Jock Card">
          <Typography variant="body2">
              Jock random
          </Typography>
        </MainCard>
      )
};

export default JockPage;
