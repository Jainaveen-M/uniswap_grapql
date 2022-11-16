import React from 'react'
import { useQuery ,gql, useSubscription} from '@apollo/client'
import { ApolloProvider } from '@apollo/client';
import { split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const link = new WebSocketLink({
    uri: `ws://localhost:4001/`,
    options: {
      reconnect: true,
    },
});


export const client = new ApolloClient({
    link, //websocket link
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', //connect to server
    cache: new InMemoryCache(),
  });


const QUERY_POOLS = gql`
    subscription getPools {
        pools{
            id
            liquidity
            token0Price
            token1Price
            volumeUSD
          }
    }
`


export default function DisplaySubscribedata() {
    const {data,loading} = useSubscription(QUERY_POOLS)
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
    <ApolloProvider client={client}>
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
       </ApolloProvider>
  )
}
