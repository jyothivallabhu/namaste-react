import React from "react"

class UserClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        
    }
    
    async componentDidMount(){
            const data = await fetch('https://api.github.com/users/jyothivallabhu')
            const json = await data.json()
            console.log(json);
            
        }

   
    render() {
        return (
            <div className="user-card">
                <h1>
                    Count: {this.state.count}
                    <button onClick={() => {
                        this.setState({
                          count:  this.state.count +1
                        })
                        //  this.setState({
                        //     count: 5,
                        //     });


                    }}   >Increase</button>
                </h1>
                <h2>Name:{this.props.name} </h2>
                <h4>Email </h4>
                <h4>Contact</h4>
            </div>
        )
    }
}

export default UserClass