import { UserList, UsersFour } from "phosphor-react"
import { Card } from "../Card"
import React, { useEffect, useState } from 'react'
import './style.scss'

export function Services() {
  const [showCards, setShowCards] = useState(false)
  const [windowYPosition, setWindowYPosition] = useState(0)

  const servicesCards = [
    {
      id: 1,
      className: 'left',
      icon: <UsersFour size={50} />,
      title: 'Community',
      description: 'Our community has a lot of cool people to talk to! Give it a try and see our posts!'
    },
    {
      id: 2,
      className: 'right',
      icon: <UserList size={50} />,
      title: 'Your friends',
      description: "See what your friends are doing, your friends' profile, list, etc."
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setWindowYPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (windowYPosition >= 15) {
      setShowCards(true)
    }
  }, [windowYPosition]);

  return (
    <div className="services-container">
      {showCards && 
        servicesCards.map((item) => (
          <Card className={item.className} key={item.id} icon={item.icon} title={item.title} description={item.description} />
          ))
        }
    </div>
  )
}