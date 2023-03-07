import React from 'react';
import style from '../App.module.scss';

function DataResult(props) {
    return <section className={style.tableSection}>
            <div className={style.blockNumbers}>
                <h5>blockNumber</h5>
                <p>{props.dataSet1.blockNumber}</p>
                <p>{props.dataSet2.blockNumber}</p>
                <p>{props.dataSet3.blockNumber}</p>
                <p>{props.dataSet4.blockNumber}</p>
                <p>{props.dataSet5.blockNumber}</p>        
            </div>
            <div className={style.blockNumbers}>  
                <h5>timeStamp</h5>              
                <p>{props.dataSet1.timeStamp}</p>
                <p>{props.dataSet2.timeStamp}</p>
                <p>{props.dataSet3.timeStamp}</p>
                <p>{props.dataSet4.timeStamp}</p>
                <p>{props.dataSet5.timeStamp}</p>                
            </div>
            <div className={style.blockNumbers}>  
                <h5>hash</h5>              
                <p>{props.dataSet1.hash}</p>
                <p>{props.dataSet2.hash}</p>
                <p>{props.dataSet3.hash}</p>
                <p>{props.dataSet4.hash}</p>
                <p>{props.dataSet5.hash}</p>                
            </div>
            <div className={style.blockNumbers}>  
                <h5>From</h5>              
                <p>{props.dataSet1.from}</p>
                <p>{props.dataSet2.from}</p>
                <p>{props.dataSet3.from}</p>
                <p>{props.dataSet4.from}</p>
                <p>{props.dataSet5.from}</p>                
            </div>
            <div className={style.blockNumbers}>  
                <h5>to</h5>              
                <p>{props.dataSet1.to}</p>
                <p>{props.dataSet2.to}</p>
                <p>{props.dataSet3.to}</p>
                <p>{props.dataSet4.to}</p>
                <p>{props.dataSet5.to}</p>                
            </div>
            <div className={style.blockNumbers}>  
                <h5> Index</h5>              
                <p>{props.dataSet1.transactionIndex}</p>
                <p>{props.dataSet2.transactionIndex}</p>
                <p>{props.dataSet3.transactionIndex}</p>
                <p>{props.dataSet4.transactionIndex}</p>
                <p>{props.dataSet5.transactionIndex}</p>            
             </div>
             <div className={style.blockNumbers}>  
                <h5>Gas</h5>              
                <p>{props.dataSet1.gasUsed}</p>
                <p>{props.dataSet2.gasUsed}</p>
                <p>{props.dataSet3.gasUsed}</p>
                <p>{props.dataSet4.gasUsed}</p>
                <p>{props.dataSet5.gasUsed}</p>            
             </div>
        </section>
}
export default DataResult