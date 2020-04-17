import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import { DropdownList } from 'react-widgets'

class TagRequest extends React.Component{
    TagListComponent=()=>{return(this.props.data.map(elm=><DropdownList onChange={alertWhenChanged}
                                                                        data={['orange', 'red', 'blue', 'purple']}/>))}
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default TagRequest;