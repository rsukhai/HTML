import React, { useContext,useState } from 'react';
import './style.css';
import selectFruits from '../summ/summ.js';
import GoodsContext from '../../context/goods.context.js';


const AutoDetect = (props) => {
  const { addGoods, removeGoods, selectedGoods,setSelectedGoods } = useContext(GoodsContext);
  const targetSum = 40;
  const [isSelected, setIsSelected] = useState(false);
  const onClick = () => {
    setIsSelected(true);
    selectedGoods.forEach(good => {
      removeGoods(good);
    });
    const bestCombination = selectFruits(props.data, targetSum);
    


    for (let good of bestCombination) {
      addGoods({ ...good  });

    }
    

  };

  return (
    <div className='auto-detect' onClick={onClick}>
      auto-detect
    </div>
    
  );
};

export default AutoDetect;

