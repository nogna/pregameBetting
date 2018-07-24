/**
 * Created by albin on 2018-07-23.
 */
import React from 'react'

class BettingEvent extends React.Component{




    render(){

        return (
            <div className="betting_event">
                <p>{this.props.name}</p>
                <p>{this.props.members}</p>
            </div>

        )

    }
}


export default BettingEvent