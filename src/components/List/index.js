import React, { Component } from 'react';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

class List extends Component {
  render() {
    return (
      <ListWrapper>
          <ListItem />
      </ListWrapper>
    );
  }
}

export default List;