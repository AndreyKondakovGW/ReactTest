import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import {Dropdown } from 'react-bootstrap';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import styled from 'styled-components';
import * as axios from 'axios';
import { ExpandMore } from '@material-ui/icons';
class TagRequest extends React.Component{
    componentDidMount(){
        this.props.Openempty()
        axios.get(this.props.siteaddres+"gettags").then(response =>{
            this.props.setTopics(response.data)
        })
    }

    AddBlocFConteiner=()=>{
        this.props.AddBlockF(0,this.props.data.length,this.props.tags[0])
    }
    AddBlocFConteiner2=(elm)=>{
        this.props.AddBlockF(elm.length,elm[0].u,this.props.tags[0])
    }

    AddButton(elm){
        return (elm.length>0 && elm.length<this.props.maxIn)?
        <ActionBox  text="Пересечь с..." action={()=>this.AddBlocFConteiner2(elm)}/>
        :
        <div></div>
    }
    AddColonButton(){
        return (this.props.data.length<this.props.maxUn)?
        <ActionBox  text="Объединить с..." action={this.AddBlocFConteiner}/>:
        <div></div>
    }
    TagListComponent(){ return <StyledExpr>
                                {this.props.data.map(elm=>
                                <StyledLine>
                                    <div className="addintersect">  
                                        {this.AddButton(elm)}
                                        {elm.map(e=>
                                                    <Dropdown className="dropdown">
                                                        <Dropdown.Toggle variant="success">{e.name}</Dropdown.Toggle>
                                                         <Dropdown.Menu>
                                                             {this.props.tags.map(t=>
                                                             <Dropdown.Item onClick={()=>this.props.ChangeBlockF(e.i,e.u,t)}>
                                                                 {t}
                                                             </Dropdown.Item>
                                                             )} 
                                                         </Dropdown.Menu>
                                                    </Dropdown>
                                        )}
                                    </div>
                                    {(this.props.data.length<this.props.maxUn)?<ExpandMore fontSize="large" className="booloperation"/>:<div></div>}
                                </StyledLine>
                                    )} 
                                   <div>{this.AddColonButton()}</div> 
                                </StyledExpr>}
    render(){
        return(
            <StyledInterface>
                <NavBarContainer name="Создание выборки"/>
                {this.TagListComponent()}
                
            </StyledInterface>
        )
    }
}
export default TagRequest;
const StyledLine = styled.div`
margin:5px;
margin-right:0px;
margin-left:0px;
display: flex;
flex-direction: row;

align-items: center;

.booloperation{
    width: 35px;
    height: 35px;
    margin-top:5px;
}
`;

const StyledExpr = styled.div`
width:100%;
height: 100%;

display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:center;
align-items: baseline;
align-content:center;
text-align:center;

#filelabel,  .button, .actionbox, .dropdown{
    margin:5px;
}
.dropdown-toggle.btn.btn-success{
    padding:0px;
    width:90px;
    height: 35px;
  
    border-radius: 0%;
    border: 0px;
    background-color:   rgb(192, 175, 211);
    color: black;
    font-size: 1em;
    outline:hidden;
    
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition: color .3s, 
                box-shadow .3s;
    :hover {
      background-color:rgb(119, 90, 163);
      color: #f1f1f1;
      box-shadow: none;
    }  
  }

`;

const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100%;

`;


