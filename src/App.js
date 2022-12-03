import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


import { Card } from './components/Card';


const LeftColumn = styled.div`
  background-image: url(/images/bg-main-desktop.png);
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
`;

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <LeftColumn className='col-lg-6 col-md-12 d-flex align-items-center p-0 leftCol text-white'>
          <Card />
        </LeftColumn>

      </div>
    </div>
  );
}

export default App;
