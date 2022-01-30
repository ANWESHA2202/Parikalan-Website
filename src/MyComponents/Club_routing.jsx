import React , {useState}from 'react'
import data from './data.json';
import Club from './Club';
import Club_nav from './Club_nav';

// const clubNames =[data.map((post)=>{
//     return post.club;
// })]

const clubNames = [
    ...new Set(
      data.map((post) => {
        return post.club;
      })
    ),
  ];

// console.log(clubNames)

const Club_routing = () => {
  const [clubData, setClubData] = useState(data);
  const [clubName, setClubName] = useState(clubNames);

  const filterData = (club_name)=>{
      const updatedClub = data.filter((post)=>{
          return post.club === club_name;
      });

      setClubData(updatedClub)
  }
  console.log(clubData);
  return (
    <div>
      <Club_nav clubName={clubName} filterData={filterData}/>
      <Club clubData={clubData}/>
    </div>
  )
}

export default Club_routing
