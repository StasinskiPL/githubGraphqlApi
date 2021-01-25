import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import DashboardHeader from "./DashboardHeader";

const getUserInfo = gql`
query($login: String!) {
    user(login: $login) {
      bio
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      repositories(first: 40, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          name
        }
      }
    }
  }
`;

const Dashboard: React.FC = () => {

    const [login,setLogin] = useState<string>("")

  const {data} = useQuery(getUserInfo, { variables: { login} });

    console.count("rendering")

  return (
    <div className="dashboard">
      <div className="dashboard-inner">
       <DashboardHeader setLogin={setLogin} />
      </div>
      {data && (
        <div className="dashboard__body">
          {data.user.avatarUrl && (
            <img src={data.user.avatarUrl} alt="avatar" />
          )}
          {data.user.bio && (
            <h3>
              bio: <span>{data.user.bio}</span>
            </h3>
          )}
          <h3>
            Followers: <span>{data.user.followers.totalCount}</span>
          </h3>
          <h3>
            Following: <span>{data.user.following.totalCount}</span>
          </h3>
          <h2>Repo:</h2>
          <ul>
            {data.user.repositories.nodes.map(({name}:{name:string},index:number)=>{
                return <li key={index}>{name}</li>

            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
