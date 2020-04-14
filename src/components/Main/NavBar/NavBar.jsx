import React from 'react';
import Contentbox from './../../Contentbox/Contentbox.jsx';
import ActionBox from './../../ActionBox/ActionBox.jsx'
import s from './NavBar.module.css';
import {Route} from 'react-router-dom';

class NavBar extends React.Component{
    delete=()=>{
        console.log('delete')
        this.props.delete()
    }
    render(){   
    return (
        <div className ={s.body}>
            <div className ={s.nav}>
                {this.props.name}
            </div>
                <Route path="/content" render={()=><div className ={s.nav}>
                    <Contentbox  text="Мои конспекты" path="/myconspects"/>
                </div>}/>

                <Route path="/content" render={()=><div className ={s.nav}>
                    <Contentbox  text="Составить выборку по темам" path={"/myconspects"}/>
                </div>}/>

                <Route path = "/myconspects/:contentname" render ={()=><div className ={s.nav}>
                    <Contentbox text="открыть в редакторе" path={"/redactor/"+this.props.name}/>
                    </div>}/>      
                <Route exact path ="/myconspects" render={()=><div className ={s.nav}>
                    <Contentbox  text="добавить конспект" path={"/creteconspect"}/>
                    </div>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="добавить фото в конспект" path={"/creteconspect/"+this.props.name}/>
                    </div>}/>
            
            
                <Route exact path ="/myconspects" render={()=><div className ={s.nav}>
                    <ActionBox text="удалить выбранные" action={this.delete}/>
                    </div> }/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="удалить" path={"/myconspects"}/>
                    </div>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="Добавит комментарий" path={"/myconspects"}/>
                    </div>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="Настроить доступ" path={"/myconspects"}/>
                    </div>}/>

                <Route path ="/redactor" render={()=><div>
                    <div className ={s.nav}>
                        <Contentbox  text="Добавит фото" path={"/myconspects"}/>
                    </div>
                    <div className ={s.nav}>
                        <Contentbox  text="удалить фото" path={"/myconspects"}/>
                    </div>
                    <div className ={s.nav}>
                        <Contentbox  text="Добавить Комментарий" path={"/myconspects"}/>
                    </div>
                    </div>
                }/>
        </div>      
    )
}
}

export default NavBar;