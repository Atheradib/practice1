import React,{useState} from "react";
import {Button} from "react-bootstrap"

export const Counter = () => {
    const [cntr, setCntr] =useState(0)
    return (
        <div>
            <table>
                <tr>
                    <td>
                    <Button variant={cntr >= 2 ? "primary" : "danger"} disables={!cntr > 0} onClick={() => cntr > 0 && setCntr(cntr+1)}>+</Button>
                    </td>
                    <td>
                        <h1>{cntr}</h1>
                    </td>
                    <td>
                    <Button variant="primary" onClick ={() => cntr < 10 && setCntr(cntr-1)}>-</Button>
                    </td>
                </tr>
                
            </table>
        </div>
    )
}