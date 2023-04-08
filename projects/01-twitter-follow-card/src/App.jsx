import TwitterFollowCard from './TwitterFollowCard'
import './App.css'

export default function App() {
  return (
    <section className='app'>
      <TwitterFollowCard initialIsFollowing userName="guzmanpdro">
        Pedro Emilio Guzmán  
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Pedro Emilio Guzmán  
      </TwitterFollowCard>
    </section>
  )
}