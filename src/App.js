import styled from 'styled-components';


import { Card } from './components/Card';
import { Form } from './components/Form';


const LeftColumn = styled.div`
  background-image: url(/images/bg-main-desktop.png);
  height: 100vh;
  background-repeat: no-repeat;
`;

const RightColumn = styled.div`
  
`;

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <LeftColumn className='col-lg-6 col-md-12 d-flex align-items-center p-0 text-white'>
          <Card />
        </LeftColumn>
        <RightColumn className='col-lg-6 col-md-12 d-flex align-items-center p-0'>
          <Form />
        </RightColumn>
      </div>
    </div>
  );
}

export default App;
