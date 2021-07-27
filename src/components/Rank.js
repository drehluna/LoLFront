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
            {Name === '' ?


                <div className='UserNotEnter'>
                    <div className='NoFirstSearch'>
                        <p>Busque o nome de um summoner</p>
                    </div>


                </div>





                : Name === '403' ?

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
                            <div className='CurrentRank'>asd</div>
                            <div className='Favorite'>asd</div>
                        </div>

                    </div>
            }
        </>
    );
}