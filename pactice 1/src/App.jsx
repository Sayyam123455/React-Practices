import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert, Button } from 'react-bootstrap';

function App() {


  return (
<>
 <Alert variant="danger">
          This is a red alert—check it out!
        </Alert>
        <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
</>

  );
}

export default App;