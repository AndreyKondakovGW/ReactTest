import React from 'react';
import Button from '../../Button/Button';

const SideBarCreatorContent=(props) =>{
    return (
        <div>
            
            <form>
                <input className="fileInput" type="file" onChange={(e)=>props.AddFoto(e)}/>
                <input type="text"  name ="conspectname" placeholder="Название конспекта (обязательно)" required autoFocus></input>
                <input type="text"  name ="comment" placeholder="добавит комментарий" required autoFocus></input>
            </form>
            <br/>
            <br/>
            <br/>
            <Button text='Сохранить' path="creteconspect"/>
            <Button text='Удалить' path="creteconspect/delete" />
        </div>
    )
}

export default SideBarCreatorContent;