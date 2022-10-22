import React from 'react';
import { wordlist } from './wordlist';

const entries = (list) => list.map(item => {
  if('heading' in item){
    return <details open={true}>
      <summary>{item.heading}</summary>
      { entries(item.members) }
    </details>
  }else{
    return <details>
      <summary>{item.headword}</summary>
      {item.def}
    </details>
  }
})

const List = () => <div>
  { entries(wordlist) }
</div>

export const App = () => <div>
  <List/>
</div>
