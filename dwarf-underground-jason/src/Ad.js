import React, { Component } from 'react'

class Ad extends Component{
    render(){
        return(
            <aside className="large-4 medium-12 columns">
                <div className="ad">
                <h3>The Last Hammer You'll Ever Need</h3>
                <div className="ad-image">
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer" />
                    <a href="#">visit sponsor</a>
                </div>  
                <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
                <p className="ad-text">It is a gift. A gift to the foes of Mordor. Why not use this Ring? Long has my father, the steward of Gondor kept the forces of Mordor at bay. By the blood of our people are your lands kept safe. Give Gondor the weapon of the enemy, let us use it against him!</p>
                <p className="ad-text">Fly you fools!</p>
                </div>
            </aside>
        )
    }
}

export default Ad