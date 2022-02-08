// CustomPicker

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {View, Text, RadioButton, RadioGroup, Picker} from 'react-native-ui-lib';
import dropdownIcon from '../../assets/icons/chevronDown.png';

const options = [
  {label: 'JavaScript', value: 'js'},
  {label: 'Java', value: 'java'},
  {label: 'Python', value: 'python'},
  {label: 'C++', value: 'c++', disabled: true},
  {label: 'Perl', value: 'perl'},
];

const CustomPicker = props => {
  const [selectedOption, setSelectedOption] = useState(
    props.initialValue || props.options[0].value,
  );

  const onValueChange = val => {
    setSelectedOption(val);
    props.onChange(val);
  };

  return (
    <Picker
      title={
        <Text marginB-20 text60 grey10>
          {props.title}
        </Text>
      }
      placeholder="Choose"
      useNativePicker
      value={selectedOption}
      onChange={onValueChange}
      rightIconSource={dropdownIcon}
      containerStyle={{marginTop: 20}}>
      {props.options.map((option, optionIndex) => {
        return (
          <Picker.Item
            key={option.value + optionIndex}
            value={option.value}
            label={option.label}
            disabled={false}
          />
        );
      })}
    </Picker>
  );
};
CustomPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
  title: PropTypes.string,
  initialValue: PropTypes.string,
};
const styles = StyleSheet.create({});

export default CustomPicker;
