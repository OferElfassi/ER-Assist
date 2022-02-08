import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Button, View, Wizard, Colors} from 'react-native-ui-lib';

const CustomWizard = props => {
  const [wizardState, setWizardState] = useState({
    activeIndex: 0,
    completedStepIndex: null,
  });

  const setWizardStateHandler = (stateName, stateValue) => {
    setWizardState(prevState => {
      return {
        ...prevState,
        [stateName]: stateValue,
      };
    });
  };

  const resetForm = () => {};

  const goToPrevStep = () => {
    const {activeIndex: prevActiveIndex} = wizardState;
    const activeIndex = prevActiveIndex === 0 ? 0 : prevActiveIndex - 1;
    setWizardStateHandler('activeIndex', activeIndex);
  };

  const goToNextStep = () => {
    const {
      activeIndex: prevActiveIndex,
      completedStepIndex: prevCompletedStepIndex,
    } = wizardState;
    const reset = prevActiveIndex === props.steps.length - 1;
    if (reset) {
      resetForm();
      return;
    }

    const activeIndex = prevActiveIndex + 1;
    let completedStepIndex = prevCompletedStepIndex;
    if (!prevCompletedStepIndex || prevCompletedStepIndex < prevActiveIndex) {
      completedStepIndex = prevActiveIndex;
    }

    if (
      activeIndex !== prevActiveIndex ||
      completedStepIndex !== prevCompletedStepIndex
    ) {
      setWizardStateHandler('activeIndex', activeIndex);
      setWizardState({activeIndex, completedStepIndex});
    }
  };

  const renderPrevButton = () => {
    return (
      <Button
        outline
        text70
        outlineColor={Colors.blue40}
        label={'Back'}
        marginT-10
        onPress={goToPrevStep}
      />
    );
  };

  const renderNextButton = (disabled, activeIndex) => {
    const label =
      activeIndex === props.steps.length - 1 ? props.finishBtnText : 'next';

    return (
      <Button
        outline={activeIndex !== props.steps.length - 1}
        text70
        // outlineColor={Colors.blue40}
        background-green30={activeIndex === props.steps.length - 1}
        label={label}
        marginT-10
        onPress={
          activeIndex === props.steps.length - 1 ? props.onFinish : goToNextStep
        }
        disabled={
          activeIndex === props.steps.length - 1
            ? props.finishBtnDisabled
            : false
        }
      />
    );
  };

  const renderCurrentStep = () => {
    const {activeIndex} = wizardState;
    return props.steps[activeIndex].component;
  };

  const getStepState = index => {
    const {activeIndex, completedStepIndex} = wizardState;
    let state = Wizard.States.DISABLED;
    if (completedStepIndex > index - 1) {
      state = Wizard.States.COMPLETED;
    } else if (activeIndex === index || completedStepIndex === index - 1) {
      state = Wizard.States.ENABLED;
    }
    return state;
  };

  return (
    <View style={styles.root}>
      <View style={styles.stepsBar}>
        <Wizard activeIndex={wizardState.activeIndex}>
          {props.steps.map((step, stepIndex) => {
            return (
              <Wizard.Step
                key={step.title + stepIndex}
                state={getStepState(stepIndex)}
                label={step.title}
              />
            );
          })}
        </Wizard>
      </View>
      <View style={styles.stepContainer}>{renderCurrentStep()}</View>
      <View
        style={styles.btnsContainer}
        right={wizardState.activeIndex === 0}
        row
        marginB-10
        spread={wizardState.activeIndex !== 0}>
        {wizardState.activeIndex !== 0 && renderPrevButton()}
        {renderNextButton(false, wizardState.activeIndex)}
      </View>
    </View>
  );
};

CustomWizard.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.element,
      title: PropTypes.string,
    }),
  ),
  onFinish: PropTypes.func,
  finishBtnText: PropTypes.string,
  finishBtnDisabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  btnsContainer: {
    width: '80%',
  },
  stepsBar: {
    marginTop: 30,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 30,
    width: '70%',
  },
});

export default CustomWizard;
