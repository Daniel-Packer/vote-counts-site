import { readString } from 'react-papaparse';
import siteListCSV from '../assets/county_pivot_odds_c2.csv';

const papaConfig = {
  complete: (results, file) => {
    console.log('Parsing complete:', results, file);
  },
  download: true,
  error: (error, file) => {
    console.log('Error while parsing:', error, file);
  },
};
readString(siteListCSV, papaConfig);

function ReadingCsv() {
  return (
    <h1>Check the console</h1>
  );
}

export default ReadingCsv