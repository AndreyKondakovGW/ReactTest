import React from 'react';
import Button from '../../Button/Button';

const SideBarReadctorContent=() =>{
    return (
        <div>
            <Button text='Основная' path="content" />
            <Button text='Открыть Конспект' />
            <form className="form-tag" method="post">
                <input type="text"  name ="tag1" placeholder="добавить тег (обязательно)" required autoFocus></input>
                <input type="text"  name ="tag2" placeholder="добавить тег"></input>
                <input type="text"  name ="tag3" placeholder="добавить тег"></input>
                <br/>
                <input type="text"  name ="comment" placeholder="добавить комментарий"></input>
                <Button text='Сохранить' path="content" />
            </form>
        </div>
    )
};

export default SideBarReadctorContent;