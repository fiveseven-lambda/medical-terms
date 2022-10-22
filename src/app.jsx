import React from 'react';
import { wordlist } from './wordlist';

const add_entries = (list, target, indent) => {
  for(const item of list){
    if('heading' in item){
      target.push(<p style={{textIndent: indent + 'px'}}>{item.heading}</p>)
      add_entries(item.members, target, indent + 15)
    }else{
      target.push(<div>
        <p style={{textIndent: indent + 'px'}}>{item.headword}</p>
        <p style={{textIndent: indent + 15 + 'px'}}>{item.def}</p>
      </div>)
    }
  }
}

const List = () => <div>
  {
    (() => {
      const entries = []
      add_entries(wordlist, entries, 0)
      return entries.map((item, i) => <div key={i}>{item}</div>)
    })()
  }
</div>

export const App = () => <div>
  <List/>
</div>
