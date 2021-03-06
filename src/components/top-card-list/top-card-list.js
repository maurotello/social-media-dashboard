import React from 'react'
import Card from '../card/card'
import './top-card-list.css'

const cardListData = [
  {
    username: '@maurotello',
    id: 1,
    followers: '1596',
    todayFollowers: 12,
    icon: 'images/icon-facebook.svg',
    name: 'facebook',
  },
  {
    username: '@maurotello',
    id: 2,
    followers: '28k',
    todayFollowers: 20,
    icon: 'images/icon-twitter.svg',
    name: 'twitter',

  },
  {
    username: '@maurotello',
    id: 3,
    followers: '6k',
    todayFollowers: 30,
    icon: 'images/icon-instagram.svg',
    name: 'instagram',


  },
  {
    username: '@maurotello',
    id: 4,
    followers: '12k',
    todayFollowers: -50,
    icon: 'images/icon-youtube.svg',
    name: 'youtube',

  },
]

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
          }
          
        </div>
      </div>
    </section>
  )
}

export default TopCardList