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
            
            <div className='Rank'>
            {UserExist === true ? 
            
            <> 
            
            <div className='table'>
            <span className='CurrentWrapper'>Current Rank <p className='currentRank'>{currentrank}</p></span>
            </div>
                <div className='Data'>
                    <img className='RankImg' src={urlRank} />
                    <h2>{rank}</h2>
                    <p className='pointsUp'>{lp} LP</p>
                </div>
                <p className='PointsUp2'>{win}W {loss}L({winrate2}%)</p>
                </>
                :
                <div className='UserNotExist'>
                    <span>usuário não encontrado</span>
                </div>}

        </div>

        :

        <div>Busque um usuario</div>
        
        }
        </>
        
    );
}