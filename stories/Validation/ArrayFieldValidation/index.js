import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, ArrayField } from '../../../src';

const validate = ( values ) => {
  if( !values || values.length < 3 ){
    return 'You must have at least three friends.';
  } 
};

const validateLength = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

const DynamicArraysContent = () => {

  return (
    <div>
      <Form>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <ArrayField field="siblings" validate={validate}>
              {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:
                  <Text field={field} validate={validateLength}/>
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
              )}
            </ArrayField>
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <FormState errors/>
          </div>
        </div>
      </Form>
    </div>
  );
};

const DynamicArrays = () => (
  <DynamicArraysContent />
);

export default withDocs(readme, DynamicArrays);
