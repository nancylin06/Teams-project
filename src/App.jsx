import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Section from './Section'

function App() {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem('array')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamD"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  }])
  const [values, setValue] = useState(JSON.parse(localStorage.getItem('values')) || 'TeamA')
  function selectChange(e) {
    setValue(e.target.value)
  }
  function clickingBtn(e) {
    setArray((teamsList) => {
      return (
        teamsList.map((allTeams) => {
          return (
            allTeams.id === parseInt(e.target.id) ? (allTeams.teamName === values) ? { ...allTeams, teamName: '' } : { ...allTeams, teamName: values } : allTeams
          )
        })
      )
    }
    )
  }

  useEffect(() => {
    localStorage.setItem('array', JSON.stringify(array))
  }, [array])
  useEffect(() => {
    localStorage.getItem('values', JSON.stringify(values))
  }, [values])

  return (
    <div>
      <Header
        values={values}
        lengthofMember={array.filter((list) => {
          return (
            list.teamName == values
          )
        })}
      />
      <Section
        array={array}
        values={values}
        selectChange={selectChange}
        clickingBtn={clickingBtn}
      />
      <Footer />
    </div>
  )
}

export default App
