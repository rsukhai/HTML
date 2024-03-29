import { useContext } from 'react';
import './style.css';
import GoodsContext from '../../context/goods.context';
import GoodsComponent from '../goods';
import AutoDetect from '../detect';

const CounterComponent = (props) => {

 const { selectedGoods } = useContext(GoodsContext);

 // const costs = selectedGoods
 //  .map(el => el.cost);
 // let sum = 0;
 // for (const el of costs) {
 //  sum += el;
 // }

 const sum = selectedGoods.reduce((acc, cur) =>  acc + cur.cost, 0);
 
 return (
  <div className='cost-wrapper'>
   <div>{sum}/40</div>
   <AutoDetect 
   data={props.data}
   />
   <div className='selected-goods'>
    {
     selectedGoods
      .map(el => <GoodsComponent {...el} key={'selected' + el.id} />)
    }
   </div>
  </div>
 );
};

export default CounterComponent;