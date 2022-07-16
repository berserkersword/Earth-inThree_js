import './App.css';
import style from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './components/earth';
import TopSection from './components/topSection';

const CanvasContainer = style.div`
  width:100%;
  height:100%;
`

function App() {
  return (
    <div className='App'>
      <CanvasContainer>
        <TopSection />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </div>
  );
}


export default App;
