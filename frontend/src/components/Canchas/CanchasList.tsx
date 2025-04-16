import { Grid } from '@mui/material';
import { CanchaCard } from './CanchaCard';
import { useEffect, useState } from 'react';

type Cancha = {
  id: number;
  tipo: '5' | '7' | '9';
  precio: number;
};

export const CanchasList = () => {
  const [canchas, setCanchas] = useState<Cancha[]>([]);

  useEffect(() => {
    fetch('api/canchas')
      .then((res) => res.json())
      .then((data) => setCanchas(data))
      .catch((error) => console.error('Error fetching canchas:', error));
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {canchas.map((cancha) => (
        <Grid sx={{
          paddingLeft: '280px',
        }} key={cancha.id} component="div">
          <CanchaCard tipo={cancha.tipo} precio={cancha.precio} />
        </Grid>
      ))}
    </Grid>
  );
};