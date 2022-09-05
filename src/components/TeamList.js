import React from "react"
import {teamMembers} from "../data"
class TeamList extends React.Component{
  render(){
    return(
      <div className="team-list container p-5">
        <h1 className="text-canter"></h1>
        <div className="row">
          {
            teamMembers && teamMembers.map((item)=>{
              return(
                <div className="col-md-3">
                  
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default TeamList