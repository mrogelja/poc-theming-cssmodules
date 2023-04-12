import { Button } from '@poc/components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Button>Bouton normal</Button>
      <Button disabled>Bouton désactivé</Button>
      <Button selected>Bouton sélectionné</Button>
      <Button size="mini" selected>
        Petit bouton sélectionné
      </Button>
      <Button style={{ '--font-size': '22px', '--background-color': 'red' }}>
        Bouton custom
      </Button>
    </div>
  );
}

export default App;
