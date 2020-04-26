import React from 'react';
import Conspectbox from './Conspectbox/ConspectboxComponent.jsx';
import Conspects from './MyConspectComponent.jsx'
import * as axios from 'axios';


class MyConspect extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.Conspects)
        this.state={    
            ReactContents : this.props.Conspects.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name+"/"+elm.id} 
                checkf={this.props.checked}/> )}
        }
     /*
        componentDidMount(){
            console.log("Отправлелен запрос на получене конспектов")
            axios.get("http://127.0.0.1:5000/getconspects").then(response =>{
                console.log(response.data)
                this.props.setConspect(response.data)
           })
        }
        */
        

    changePage=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({    
            ReactContents : this.props.Conspects.slice(this.props.Pagesize*(pageNum-1),this.props.Pagesize*pageNum).map(elm => <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name+"/"+elm.id}  
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
                path={"/myconspects/"+elm.name+"/"+elm.id} 
                checkf={this.props.checked}/>)
            
        })
        console.log(this.props.Conspects)
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