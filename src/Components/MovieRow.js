import React, { Component } from 'react';

export default class MovieRow extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        {/*Props will pass the value from parent to child(this) component */}
                        <td><img src={this.props.movieParent.posterSrc} alt="poster"/></td>                
                        <td>
                            {this.props.movieParent.title}
                            <div>{this.props.movieParent.overview}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
