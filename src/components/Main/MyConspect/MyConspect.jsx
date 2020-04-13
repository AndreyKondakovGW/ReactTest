import React from 'react';
import Conspectbox from './ConspectboxComponent.jsx';
import NavBar from '../NavBar/NavBar';
import * as axios from 'axios';
import s from './MyConspect.module.css'


class MyConspect extends React.Component{
    constructor(props){
        super(props)
        this.state={    
            ReactContents : this.props.Conspects.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name} 
                checkf={this.props.checked}/> )}
        }

    getConspects=()=>{
        axios.get("https://getconspect").then(response =>{
            this.props.setConspect(response.data.conspects)
        })
    }

    changePage=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({    
            ReactContents : this.props.Conspects.slice(this.props.Pagesize*(pageNum-1),this.props.Pagesize*pageNum).map(elm => <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name} 
                checkf={this.props.checked}/>)
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props) {
        this.setState({    
            ReactContents : this.props.Conspects.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name} 
                checkf={this.props.checked}/>)
            
        })
        }
    }

    render(){
        let pagescount=Math.ceil(this.props.Conspectcount /this.props.Pagesize);

        let pages=[];
        for(let i=1;i<=pagescount;i++){
            pages.push(i)
        }
        return (
            <div>
                <NavBar name="Конспекты" delete={this.props.deletechecked}/>
                <div>
                    {pages.map(elm=><span className={this.props.CurrentPage ===elm && s.selected} onClick={()=>{this.changePage(elm)}}>{elm}</span>)}
                    {this.state.ReactContents}
                </div>
                
            </div>
        )
}
}

export default MyConspect;