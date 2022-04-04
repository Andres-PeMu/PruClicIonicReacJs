import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import Tab1 from './pages/Home/Tab1';


/* Theme variables */
//import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Tab1 />
  </IonApp>
);

export default App;
