import { useStore } from '@nanostores/react';
import { counter } from './../../../../packages/state/src/index';

const Button = () => {
  const store = useStore(counter);

  return <button>test react {store}</button>;
};

export default Button;
