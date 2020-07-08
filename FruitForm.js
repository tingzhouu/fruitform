import React from 'react';
import {Text, View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const options = ['apple', 'banana', 'carrot'];

const FruitForm = ({submitFruit}) => {
  const {control, handleSubmit} = useForm();

  // DO THIS! control what you pass to submitFruit as submitFruit is the function you are testing
  const onSubmit = (data) => {
    submitFruit(data);
  };
  return (
    <View>
      <View style={{height: 50}} />
      <Text>Select your favourite fruit</Text>
      <Controller
        control={control}
        render={({onChange}) => (
          <>
            {options.map((option) => (
              <Button
                key={option}
                title={option}
                onPress={() => {
                  onChange(option);
                }}
              />
            ))}
          </>
        )}
        name="favourite_fruit"
        rules={{required: true}}
      />
      {/* DO NOT DO THIS!! You will not know what arguments handleSubmit is passing to submitFruit */}
      {/* <Button title="Submit" onPress={handleSubmit(submitFruit)} /> */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FruitForm;
