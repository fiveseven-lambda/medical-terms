import React from 'react'
import wordlist from './wordlist.yaml'

const entries = (list) => list.map(item => {
  if('heading' in item){
    return <details open={true}>
      <summary>{item.heading}</summary>
      { entries(item.members) }
    </details>
  }else{
    var heading = item.headword
    if('context' in item){
      heading += '（' + item.context + '）'
    }
    return <details>
      <summary className={!('def' in item) && 'empty'}>{heading}</summary>
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
