import { UseName } from '../contexts/Name';
import '../styles/Rank.css'

export function Rank() {

    const { Name } = UseName()


    let rank = 'undefined'
    let win = '0'
    let loss = '0'
    let winrate = 0
    let winrate2
    let lp = 0
    let urlRank = ''
    let currentrank = 'undefined'
    let UserExist = false

    console.log(Name)
    

    if (Name.rankeds) {
        if (Name.rankeds[0]) {
            
            UserExist = true
            rank = Name.rankeds[0]['tier']
            win = Name.rankeds[0]['wins']
            loss = Name.rankeds[0]['losses']
            winrate = Name.rankeds[0]['winRate']
            winrate2 = parseFloat(winrate).toFixed(0)
            lp = Name.rankeds[0]['leaguePoints']
            urlRank = Name.rankeds[0]['rankIcon']
            currentrank = Name.rankeds[0]['queueType']
            console.log(Name)



        }
    }


    return (

        <>
            {Name !== '' ?
                <div className='WrapperRanks'>
                    <div className='Rank'>
                        {UserExist === true ?

                            <>

                                <div className='table'>
                                    <span className='CurrentWrapper'>Current Rank</span>
                                    <p className='currentRank'>{currentrank}</p>
                                </div>


                                <div className='Data'>
                                    <img className='RankImg' src={urlRank} />
                                    <h2>{rank}/{Name.rankeds[0].rank}</h2>


                                </div>
                                <div className='Points'><p className='pointsUp'>{lp} LP</p>
                                    <p className='PointsUp2'>{win}W {loss}L({winrate2}%)</p></div>




                            </>
                            :
                            <div className='UserNotExist'>
                                <span>usuário não encontrado</span>
                            </div>



                        }

                    </div>

                    <div className='Rank'>
                        {UserExist === true ?

                            <>

                                <div className='table'>
                                    <span className='CurrentWrapper'>Current Rank</span>
                                    <p className='currentRank'>{Name.rankeds[1].queueType}</p>
                                </div>


                                <div className='Data'>
                                    <img className='RankImg' src={Name.rankeds[1].rankIcon} />
                                    <h2>{Name.rankeds[1].tier}/{Name.rankeds[1].rank} </h2>


                                </div>
                                <div className='Points'><p className='pointsUp'>{Name.rankeds[1].leaguePoints} LP</p>
                                    <p className='PointsUp2'>{Name.rankeds[1].wins}W {Name.rankeds[1].losses}L({parseFloat(Name.rankeds[1].winRate).toFixed(0)}%)</p></div>




                            </>
                            :
                            <div className='UserNotExist'>
                                <span>usuário não encontrado</span>
                            </div>



                        }
                    </div>
                </div>

                :




                <div>Busque um usuario</div>

            }
        </>

    );
}