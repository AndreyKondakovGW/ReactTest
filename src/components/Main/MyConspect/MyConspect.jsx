import React from 'react';
import Conspectbox from './Conspectbox/ConspectboxComponent.jsx';
import Conspects from './MyConspectComponent.jsx'
import * as axios from 'axios';


class MyConspect extends React.Component{
    constructor(props){
        debugger
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

        componentDidMount(){
            //axios.get("https://getconspect").then(response =>{
            //this.props.setConspect(response.data.conspects,response.data.pdf)
            //})
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
        {debugger}
        return (
        <div>   
                <Conspects deletechecked={this.props.deletechecked}
                    pages={pages}
                    CurrentPage={this.props.CurrentPage}
                    changePage={this.changePage}
                    ReactContents={this.state.ReactContents}> 
                </Conspects>
                                    
        </div>
        )
}
}

export default MyConspect;