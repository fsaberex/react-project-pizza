import { useContext } from 'react';
import appContext from '../store/appContext';


function Quantity() {

  const { handleQuantityDecrease } = useContext(appContext);
  const { handleQuantityIncrease } = useContext(appContext);
  const { quantity } = useContext(appContext);

  return (
    <div>
      <div id="Quantity">
        <button onClick={handleQuantityDecrease}>decrease</button>
        <button onClick={handleQuantityIncrease}>increase</button>
        <span>Quantity ({quantity})</span>
      </div>
    </div>
  );
}

export default Quantity;
