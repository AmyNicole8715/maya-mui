import { googleFormsToJson } from 'react-google-forms-hooks';

const result = async () => await googleFormsToJson(
    'https://docs.google.com/forms/d/e/1FAIpQLSd6K6rqQbzSwHOvOBDE8xXzK0vwnjRa9Kcs-2RkTKh4623adA/viewform'
);

console.log(result.fields);