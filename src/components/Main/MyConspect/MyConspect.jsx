import React from 'react';
import Conspectbox from './Conspectbox/ConspectboxComponent.jsx';
import Conspects from './MyConspectComponent.jsx';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import { Alert} from 'react-bootstrap';
import ActionBox from './../../ActionBox/ActionBox.jsx'
import * as axios from 'axios';


class MyConspect extends React.Component{
    constructor(props){
        super(props)
        this.state={    
            ReactContents : this.props.Conspects.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
            <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name+"/"+elm.id+"/content"} 
                checkf={this.props.checked}/> )}
        }
        
        componentDidMount(){
            console.log("Отправлелен запрос на получение конспектов")
            axios.get("http://127.0.0.1:5000/getconspects").then(response =>{
                console.log(response.data)
                this.props.setConspect(response.data)
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
                path={"/myconspects/"+elm.name+"/"+elm.id+"/content"}  
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
                path={"/myconspects/"+elm.name+"/"+elm.id+"/content"} 
                checkf={this.props.checked}/>)
            
        })
        }
    }
    AletrF=()=>{
        console.log(this.props)
        return(
        (this.props.AlertisOpen)?
            <Alert variant="danger" onClose={this.props.closeAlert} dismissible>
                <Alert.Heading>Внимание, если вы выполните удаление следующих конспектов, привязанные тэги будут также удалены!</Alert.Heading>
                    {this.props.AlertText}
                <ActionBox text="Всё равно удалить" action={this.props.delete}/>
            </Alert>:<></>
    )}
    render(){
        let pagescount=Math.ceil(this.props.Conspectcount /this.props.Pagesize);

        let pages=[];
        for(let i=1;i<=pagescount;i++){
            pages.push(i)
        }
        return (
        <div> 
                <NavBarContainer name="Конспекты"/>
                <Conspects 
                    Readcted={true}
                    pages={pages}
                    CurrentPage={this.props.CurrentPage}
                    changePage={this.changePage}
                    ReactContents={this.state.ReactContents}
                    alert={this.AletrF}> 
                </Conspects>                   
        </div>
        )
}
}

export default MyConspect;