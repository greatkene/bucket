import React, {useState} from 'react'

const App = () => {
  // const [activity, setActivity] = useState('')
  // const [location, setLocation] = useState('')
  const [events, setEvents] = useState({activity:'', location:''})
  const [bucketList, setBucketList] = useState([])
  
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (activity && location) {
  //     const bucket = {id: new Date().getTime().toString(), activity, location};
  //     setBucketList((bucketList) => {
  //       return [...bucketList, bucket];
  //     })
  //     setActivity('')
  //     setLocation('')
  //   } else {
  //     console.log('empty');
  //   }
  // }
 
  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setEvents({...events, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (events.activity && events.location) {
      const newEvents = {...events, id: new Date().getTime().toString()}
      setBucketList([...bucketList, newEvents])
      setEvents({activity:'', location:''})
    }
  }

  return (
    <>
      <article>
       <h1>My Bucket List</h1>
          <form className='form' onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="activities">Activity:</label>
              <input type="text" 
                id='activity'
                name='activity'
                value={events.activity}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="location">Location:</label>
              <input type="text" 
                id='location'
                name='location'
                value={events.location}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Add Activity</button>
          </form>
          {
            bucketList.map((item) => {
              const {id, activity, location} = item;
              return <div className='item' key={id}>
                <h4>{activity}</h4>
                <p>{location}</p>
              </div>
            })
          }
      </article>
      
    </>
  )
}
  
export default App
