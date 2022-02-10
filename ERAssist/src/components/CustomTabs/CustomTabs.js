import PropTypes from 'prop-types';
import React from 'react';
import {Colors, TabController, Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const CustomTabs = props => {
  const {items} = props;
  // const [items,setItems] = useState([])
  const renderTabPages = () => {
    return (
      <TabController.PageCarousel>
        {items.map((item, index) => {
          return (
            <TabController.TabPage key={item.label} index={index}>
              <View padding-s5>
                <Text text40>{item.label}</Text>
                {item.component}
              </View>
            </TabController.TabPage>
          );
        })}
      </TabController.PageCarousel>
    );
  };
  return (
    <View style={styles.root}>
      <TabController
        key={'tabPage'}
        asCarousel={true}
        initialIndex={0}
        onChangeIndex={this.onChangeIndex}
        items={items || []}>
        <TabController.TabBar
          // items={items}
          key={'tabPage'}
          // uppercase
          // indicatorStyle={{backgroundColor: 'green', height: 3}}
          // indicatorInsets={0}
          spreadItems={true}
          backgroundColor={'transparent'}
          // labelColor={'green'}
          // selectedLabelColor={'red'}
          labelStyle={styles.labelStyle}
          selectedLabelStyle={styles.selectedLabelStyle}
          // iconColor={'green'}
          // selectedIconColor={'blue'}
          enableShadow
          activeBackgroundColor={Colors.blue60}
          centerSelected={false}>
          {/* {this.renderTabItems()} */}
        </TabController.TabBar>
        {renderTabPages()}
      </TabController>
    </View>
  );
};

CustomTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      key: PropTypes.string,
      component: PropTypes.node,
    }),
  ),
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 16,
  },
  selectedLabelStyle: {
    fontSize: 16,
  },
});

export default gestureHandlerRootHOC(CustomTabs);
