import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <div className ="about">
     <h1>About this Project</h1>
     <p>The is a React Tutorial App to learn React</p>
     <p>
    <Link to='/'> Back to Home </Link>
     </p>
    </div>
  )
}

export default AboutPage
