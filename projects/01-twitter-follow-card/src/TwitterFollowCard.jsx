import { useState } from "react"

export default function({ children, userName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const imageSrc = `https://unavatar.io/${userName}`
  const imageAlt = `El avatar de ${userName}`
  const text = isFollowing ? 'Following' : 'Follow'
  const textUnfollow = text === "Following" ? "Unfollow" : text

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = (e) => {
    setIsFollowing(!isFollowing)
  }

  const handleMouseOver = e => {
    e.target.classList.contains("is-following") ? e.target.classList.add("unfollow") : null
    e.target.textContent = textUnfollow 
  }

  const handleMouseOut = e => {
    e.target.classList.remove("unfollow")
    e.target.textContent = text
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={imageSrc} alt={imageAlt}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
        <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {text}
        </button>
      </aside>
    </article>
  )
}