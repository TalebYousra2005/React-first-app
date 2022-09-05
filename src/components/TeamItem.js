import React from "react"


class TeamItem extends ReactComponent{
  constructor(props){
    super(0;)
  }
  render(){
    return(
      <div className="card">
                     <div className="card-body">
    <h3 className="card-title">
                {this.props.firstName} {this.props.lastName}
    </h3>
    <p className="card-text">{this.props.profession}</p>
  </div>
</div>
    )
  }
  
}
export default TeamItem