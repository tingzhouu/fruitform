import React from 'react';
import {Text, View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const options = ['apple', 'banana', 'carrot'];

const FruitForm = ({submitFruit}) => {
  const {control, handleSubmit} = useForm();
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
      <Button title="Submit" onPress={handleSubmit(submitFruit)} />
    </View>
  );
};

export default FruitForm;
