import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import styles from './CanchaCard.module.scss';

type CanchaCardProps = {
  tipo: '5' | '7' | '9';
  precio: number;
};

export const CanchaCard = ({ tipo, precio }: CanchaCardProps) => {
  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h5" gutterBottom className={styles.title}>
            Cancha de {tipo}
          </Typography>
          <Typography variant="body1" className={styles.price}>
            ${precio}/hora
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              variant="contained" 
              color="primary"
              className={styles.button}
            >
              Reservar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};