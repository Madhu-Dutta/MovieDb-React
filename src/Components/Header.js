import React, { Component } from 'react';
import '../Styles/header.css';

export default class Header extends Component{
    
    render(){    
        return (     
        <div className="contents">
            <table className="table-contents">
                <tbody>
                    <tr>
                        <td>
                            <img width="50" src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="HeaderLogo" />
                        </td>
                        <td width="8" />
                        <td>
                            <h1>MovieDB Search</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>       
        )
    }
}
