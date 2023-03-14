import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <RotatingLines
      strokeColor="#0E8388"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);
