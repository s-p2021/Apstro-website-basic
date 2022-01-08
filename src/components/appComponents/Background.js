import React from 'react';
import { Gradient } from 'react-gradient';
import styled from 'styled-components';

import Colors from '../../constants/Colors';

const View = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%
`

const Background = props => {

  const gradients = [
    ['pink', 'blue'],
    ['pink', 'yellow'],
  ];

  return (
    <>
      <Gradient
        gradients={ gradients } // required
        property="background"
        duration={ 15000 }
        angle="45deg"
      >
        <View>
          {props.children}
        </View>
      </Gradient>
    </>
  )
}

export default Background;
