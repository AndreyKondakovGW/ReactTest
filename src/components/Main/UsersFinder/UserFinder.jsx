import React,{useState} from 'react';
import FormControl from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import * as axios from 'axios';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const UserFinder = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
      const [options,setOptions]=[];
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <input
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => handleChange(e)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children)}
          </ul>
        </div>
      );
    },
  );
  class UserFinderForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            options: []
        }
    }

    SetOption=(newoptions)=>{
      this.setState({

      })
    }
   // handleChange=(e)=>{
     //   let value = e.target.value;
     //   if (value!=""){
       //     axios.get('http://127.0.0.1:5000/search_users/'+value).then(response=>{
        //        console.log(response)
        //        this.setState({
         //           options: response.data
           //     })
         //   })
    //    }
  ///  }

  render(){
    return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>
  
      <Dropdown.Menu as={UserFinder}>
        {UserFinder.options.map(elm=><Dropdown.Item eventKey={elm.id}>{elm.username}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  )
  }
}

  export default  UserFinderForm;