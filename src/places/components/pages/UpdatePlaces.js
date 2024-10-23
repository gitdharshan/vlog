import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../../shared/components/FormElements/Input';
import Button from '../../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../../shared/components/util/validators';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Statue of Liberty',
    description: 'A colossal neoclassical sculpture on Liberty Island.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg',
    address: 'Liberty Island, New York, NY 10004',
    location: {
      lat: 40.689247,
      lng: -74.044502
    },
    creator: 'u2'
  }
];

const UpdatePlaces = (props) => {
  // Corrected use of useParams
  const { placeId } = useParams();

  // Corrected the find method
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  // Return error if place not found
  if (!identifiedPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    );
  }

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    // Logic to handle form submission goes here
    console.log('Place updated!');
  };

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}} // Placeholder handler, update logic as necessary
        value={identifiedPlace.title}
        isValid={true} // Corrected prop name to isValid
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInput={() => {}} // Placeholder handler, update logic as necessary
        value={identifiedPlace.description}
        isValid={true} // Corrected prop name to isValid
      />
      <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlaces;
