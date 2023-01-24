import React, { Fragment } from "react";
import { Buttons, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import index1 from "./employee";
import { Fragment } from "react";

function index1() {
  return(
    <Fragment>
        <div style={{margin :"10rem"}}>
            <Table>
                <head>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            age
                        </th>
                    </tr>
                </head>
                <tb>
                    {
                        index1 && index1.lenght > 0
                        ?
                        index1.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                </tr>
                            )
                        }
                        ) 
                        : 
                        "no data available"
                    }                     
                </tb>
            </Table>

        </div>

  </Fragment>
  ) ;
}
export default index1;
