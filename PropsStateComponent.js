//  Declaration with class Component
// import React from 'react';
// import {View, Text} from 'react-native';

// class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello React Native</Text>
//       </View>
//     );
//   }
// }
// export default App;

// Declaration with functional Component

// import React from 'react';
// import {View, Text} from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text>Hallo React native 2</Text>
//     </View>
//   );
// };
// export default App;

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

// const Header = (props) => {
//   return (
//     <View style={{height: 50, width: '100%', backgroundColor: 'blue'}}>
//       <Text>{props.title}</Text>
//     </View>
//   );
// };
const Header = ({title}) => {
  return (
    <View style={{height: 50, width: '100%', backgroundColor: 'blue'}}>
      <Text>{title}</Text>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const tambah = () => {
    setCount(count + 1);
  };
  const kurang = () => {
    setCount(count - 1);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title={'Header 1'} />
      {/* <Header title={'Header 2'} />
      <Header title={'Header 3'} /> */}
      <Text style={{fontSize: 20, color: 'black'}}>{count}</Text>
      <Button
        title="Tambah"
        onPress={() => {
          tambah();
        }}
        // onPress={tambah}
      />
      <Button title="Kurang" onPress={kurang} />
    </View>
  );
};
export default App;
