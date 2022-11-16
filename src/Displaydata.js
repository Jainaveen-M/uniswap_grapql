import React from 'react'
import { useQuery ,gql} from '@apollo/client'

// const QUERY_POOLS = gql`
//     query getPools {
//         pools{
//             id
//             liquidity
//             token0Price
//             token1Price
//             volumeUSD
//           }
//     }
// `



const QUERY_POOLS = gql`
    query getPools {
        pools{
            tick
            token0 {
              symbol
              id
              decimals
            }
            token1 {
              symbol
              id
              decimals
            }
            feeTier
            sqrtPrice
            liquidity
          }
    }
`

export default function Displaydata() {

    const {data,loading} = useQuery(QUERY_POOLS)
    if(data){
        data.pools.map((e)=>console.log(e.id))
        console.log(data)
    }

    if(loading){
        return (
            <div>
                <h1>
                  Loading...      
                </h1>
            </div>
        );
    }

  return (
    <div>
        <h4>
            Pool details
        </h4>
    {data && data.pools.map((e) =>{
        return (
            <div>
                <h6>ID : {e.id}</h6>
                <h6>Liquidity : {e.liquidity}</h6>
                <h6>Token0Price : {e.token0Price}</h6>
                <h6>Token1Price : {e.token1Price}</h6>
                <h6>VolumeUSD : {e.volumeUSD}</h6>
                <h6>--------------------------</h6>
            </div>
        );
   })}
    </div>
    
  )
}
