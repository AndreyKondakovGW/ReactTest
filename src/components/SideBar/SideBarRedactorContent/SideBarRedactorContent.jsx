import React from 'react';
import Button from '../../Button/Button';
import MyConspectList from './../../ConspectList/ConspectList.jsx';

const SideBarReadctorContent=(props) =>{
    return (
        <div>
            <Button text='Основная' path="content" />
            <MyConspectList>
                <div>
                    {props.Conspects.map(elm => <Button text={elm.name} path={"redactor/"+elm.name} />)}
                </div>
            </MyConspectList>
        </div>
    )
};

export default SideBarReadctorContent;