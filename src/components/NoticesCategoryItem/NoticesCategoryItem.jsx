import React from 'react'

const NoticesCategoryItem = (
  {
  id,
  avatar,
  favorite,
  title,
  breed,
  location,
  age,
  condition,
  onDeletePets,
  onLearnMore,
  }) => {
  return (
    <li>
      <div>
        <img src={avatar} alt={title} width="100" />
        <p>{condition}</p>
        <span>icon</span>
      </div>
    <h3>{title}</h3>
      <p>Breed:<span>{breed}</span></p> 
      <p>Location:<span>{location}</span></p>
      <p>Age:<span>{age}</span></p> 
    <button type="submit" onClick={() => onLearnMore(id)}>Learn more</button>
    {favorite? <button
      type='submit'
      onClick={() => onDeletePets(id)}>
      Delete
    </button> : null}
    </li>
  )
}

export default NoticesCategoryItem