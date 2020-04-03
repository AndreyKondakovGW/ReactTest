import React from 'react';
import Contentbox from '../../Contentbox/Contentbox';

const MyConspect = (props) =>{

    let ReactContents = props.Conspects.map(elm => <Contentbox text={elm.name} path={elm.name} /> )

    return (

        <div>
            <div className = "titel">My Conspects</div>
            <div>
                {ReactContents}
            </div>
            
        </div>
    )

}

export default MyConspect;