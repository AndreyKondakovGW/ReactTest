import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import {Dropdown } from 'react-bootstrap';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import s from './TagRequest.module.css';
import styled from 'styled-components';
const StyledTagRequest = styled.div`

`;
class TagRequest extends React.Component{
    AddBlocFConteiner=()=>{
        this.props.AddBlockF(0,this.props.data.length,this.props.tags[0])
    }
    AddBlocFConteiner2=(elm)=>{
        this.props.AddBlockF(elm.length,elm[0].u,this.props.tags[0])
    }
    AddButton(elm){
        return (elm.length>0 && elm.length<this.props.maxIn)?<ActionBox text="добавить пересечене" action={()=>this.AddBlocFConteiner2(elm)}/>:<div></div>
    }
    AddColonButton(){
        return (this.props.data.length<this.props.maxUn)?<ActionBox text="добавить обединение" action={this.AddBlocFConteiner}/>:<div></div>
    }

    TagListComponent(){ return <div>{this.props.data.map(elm=><div className={s.Row}>               
                                                    {elm.map(e=><Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            {e.name}
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            {this.props.tags.map(t=><Dropdown.Item onClick={()=>this.props.ChangeBlockF(e.i,e.u,t)}>{t}</Dropdown.Item>)} 
                                                        </Dropdown.Menu>
                                                    </Dropdown>)}
                                                    {this.AddButton(elm)}
                                                    </div>)} <div className={s.Row}>{this.AddColonButton()}</div></div>}
    render(){
        return(
            <div>
                <NavBarContainer name="Tagrequest"/>
                {this.TagListComponent()}
                <ActionBox text="Показать" action={this.props.WriteRequestF}/>
                <ActionBox text="Сохранить" action={this.props.WriteRequestF}/>
            </div>
        )
    }
}
export default TagRequest;