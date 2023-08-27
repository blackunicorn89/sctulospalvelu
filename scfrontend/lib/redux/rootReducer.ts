/* Instruments */
import { counterSlice } from './slices';
import KilpailijatSlice   from  'app/components/Kilpailijat/kilpailijatSlice'

export const reducer = {
  counter: counterSlice.reducer,
  kilpailijat: KilpailijatSlice.reducer

}
