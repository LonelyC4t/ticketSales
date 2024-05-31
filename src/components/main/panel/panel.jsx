/*eslint-disable*/
import { useDispatch, useSelector } from 'react-redux';
import style from './panel.module.scss';
import { useCallback, useEffect } from 'react';

const Panel = () => {
    const dispatch = useDispatch();

    const chek = useSelector(state => state.checkBoxes);
    //console.log(chek);
    const cheked = (ids, checked) => {
        if(chek.chek2 === true && chek.chek3 === true && chek.chek4 === true && chek.chek5 === true && chek.chek1 === false) return dispatch({type: 'selectChek1'});
        if(chek.chek1 === true && (chek.chek2 === false || chek.chek3 === false || chek.chek4 === false || chek.chek5 === false)) return dispatch({type: 'deselectChek1'});
        if(ids === 'chek1' && chek.chek1 === true) return dispatch({type: 'deselectAll'});
        if(ids === 'chek1') return dispatch({type: 'selectAll'});
        
        
        return dispatch({type: "chek", payload: {[ids]: checked}});
    };
     
 
    const handleCheked = (e) => {
        const {id, checked} = e.target;
        console.log(id, checked);

        
        cheked(id, checked);
    };

  

   

    return (
        <div className={style.main__panel}>
            <h6>KОЛИЧЕСТВО ПЕРЕСАДОК</h6>
            <form>
                <ul>
                    <label htmlFor="chek1"> <li> <input onChange={handleCheked} className={style.panel__item} checked={chek.chek1} id='chek1' type="checkbox" /> Все</li></label>
                    <label htmlFor="chek2"> <li><input onChange={handleCheked} className={style.panel__item} checked={chek.chek2} id='chek2' type="checkbox" /> Без пересадок</li></label>
                    <label htmlFor="chek3"> <li><input onChange={handleCheked} className={style.panel__item} checked={chek.chek3} id='chek3' type="checkbox" /> 1 пересадка</li></label>
                    <label htmlFor="chek4"> <li><input onChange={handleCheked} className={style.panel__item} checked={chek.chek4} id='chek4' type="checkbox" /> 2 пересадки</li> </label>
                    <label htmlFor="chek5"> <li><input onChange={handleCheked} className={style.panel__item} checked={chek.chek5} id='chek5' type="checkbox" /> 3 пересадки</li> </label>
                </ul>
            </form>
        </div>
    );
};
export default Panel;
