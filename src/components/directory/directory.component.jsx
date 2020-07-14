import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'birds',
        imageUrl: 'https://source.unsplash.com/random/400×400/?bird',
        id: 1
      },
      {
        title: 'reptiles',
        imageUrl: 'https://source.unsplash.com/random/400×400/?reptile',
        id: 2
      },
      {
        title: 'horses',
        imageUrl: 'https://source.unsplash.com/random/400×400/?horse',
        id: 3
      },
      {
        title: 'dogs',
        imageUrl: 'https://source.unsplash.com/random/400×400/?dog',
        size: 'large',
        id: 4
      },
      {
        title: 'cats',
        imageUrl: 'https://source.unsplash.com/random/400×400/?cat',
        size: 'large',
        id: 5
      }]
    };
  }

  render() {
    return (
      <div className='dir-men'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;