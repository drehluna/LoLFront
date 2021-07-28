import { useEffect, useState } from 'react';
import { UseName } from '../contexts/Name';
import '../styles/Rank.css'

export function Rank() {

    const { Name } = UseName()

    const [RankNum, setRank] = useState(0)


    let ImageRank = ''
    let RankName = ''
    let RankLevel = ''
    let LeaglePoints = ''

    let wins = 0
    let losses = 0
    let winrate = 0

    console.log(Name)

    if (Name.rankeds) {
        if (Name.rankeds[0]) {
        
            console.log(RankNum)

        ImageRank = Name.rankeds[RankNum].rankIcon
        RankName = Name.rankeds[RankNum].tier
        RankLevel = Name.rankeds[RankNum].rank
        LeaglePoints = Name.rankeds[RankNum].leaguePoints

        wins = Name.rankeds[RankNum].wins
        losses = Name.rankeds[RankNum].losses
        winrate = parseFloat(Name.rankeds[RankNum].winRate).toFixed(0)

        }
    }

   

   

    function onSelectEvent(event) {
        const value = event.target.value
        setRank(value)

    }


    return (

        <>
            {Name === '' ?

                <div className='UserNotEnter'>
                    <div className='NoFirstSearch'>
                        <p>Busque o nome de um summoner</p>
                    </div>


                </div>

                : Name === 403 ?

                    <div className='UserNotEnter'>
                        <div className='NoFirstSearch'>
                            <p>Infelizmente nossa API está fora do ar no momento. [403]</p>
                        </div>
                    </div>

                    :

                    <div>

                        <div className='WrapperRank'>
                            <div className='Perfil'>

                                <div className='firstCircle'>
                                    <img src={Name.profileIconId} />
                                    <p>{Name.name}</p>

                                </div>

                            </div>
                            <div className='CurrentRank'>
                                <div className='CurrentRank-TOP'>
                                    <h4>CurrentRank</h4>

                                    <div className='CustomSelect'>
                                        <select onChange={onSelectEvent} className='SelectRank'>
                                          {Name.rankeds.map((itens,index) => <option key={index} value={index} > {itens.queueType} </option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className='CurrentRank-MIDLE'>
                                    <img className='imgRank' src={ImageRank} />
                                    <span>{RankName}</span>
                                    <span>{RankLevel}</span>
                                    <span>{LeaglePoints} LP</span>

                                    <div className='Wins'>
                                        <p>{wins}W {losses}L {winrate}%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Favorite'>asd</div>
                        </div>

                    </div>
            }
        </>
    );
}