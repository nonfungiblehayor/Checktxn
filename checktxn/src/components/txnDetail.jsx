import React from "react";
import style from '../App.module.scss'

function Txndetail() {
    return <section className={style.txnSection}>
        <div className={style.txnContainer}>
        <div className={style.div1}>
            <p>
                Transaction hash:
            </p>
            <p>
                Status:
            </p>
            <p>
                Block:
            </p>
            <p>
                Timestamp:
            </p>
            <p>
                From:
            </p>
            <p>
                To:
            </p>            
        </div>
        <div className={style.div2}>            
            <p>
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
            <p>
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
            <p>
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
            <p>
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
            <p>
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
            <p>
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
        </div>
        </div>
    </section>
}

export default Txndetail;