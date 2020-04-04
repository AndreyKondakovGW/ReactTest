import React from 'react';
import Button from '../../Button/Button';

const SideBarCreatorContent=() =>{
    return (
        <div>
            <Button text='Добавить Фото' path="" />
            <form className="form-creator" method="post">
                <input type="text"  name ="conspectname" placeholder="Название конспекта (обязательно)" required autoFocus></input>
                <input type="text"  name ="comment" placeholder="добавит комментарий" required autoFocus></input>
            </form>
            <br/>
            <br/>
            <br/>
            <Button text='Удалить' path="creteconspect/delete" />
        </div>
    )
}

export default SideBarCreatorContent;