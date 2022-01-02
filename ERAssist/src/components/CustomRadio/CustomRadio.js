import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {View, Text, RadioButton, RadioGroup} from 'react-native-ui-lib';

const CustomRadio = props => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderRadioButton = (value, text) => {
    return (
      <View row centerV marginB-7 marginL-8={props.row}>
        <RadioButton value={value} label={text} />
      </View>
    );
  };
  const onValueChange = val => {
    setSelectedOption(val);
    props.onChange(val);
  };

  return (
    <RadioGroup
      initialValue={selectedOption || 0}
      onValueChange={onValueChange}>
      <Text marginB-20 text70 grey10>
        {props.title}
      </Text>
      <View row={props.row}>
        {props.options.map(option => {
          return renderRadioButton(option.value, option.label);
        })}
      </View>
    </RadioGroup>
  );
};
CustomRadio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
  title: PropTypes.string,
  row: PropTypes.bool,
};
const styles = StyleSheet.create({});

export default CustomRadio;
