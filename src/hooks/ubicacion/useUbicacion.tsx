import {useEffect, useState} from 'react';
import {Welcome} from '../../interface/PersonaInterface';
import {ApiRickandMorty} from '../../api/ApiRickandMorty';
import {Result, WelcomeLocation} from '../../interface/LocationInterface';
interface Person {
  Location: Result[];
  Location2: Result[];
  Location3: Result[];
  Location4: Result[];
  Location5: Result[];
  Location6: Result[];
  Location7: Result[];
}
export const UseLocacion = () => {
  const [location, setlocation] = useState<Person>();

  const getPersonajes = async () => {
    const PersonPromise = await ApiRickandMorty.get<WelcomeLocation>('location?page=2',);
    const Person2Promise =
      ApiRickandMorty.get<WelcomeLocation>('location?page=2');
    const Person3Promise =
      ApiRickandMorty.get<WelcomeLocation>('location?page=3');
    const Person4Promise =
      ApiRickandMorty.get<WelcomeLocation>('location?page=4');
    const Person5Promise =
      ApiRickandMorty.get<WelcomeLocation>('location?page=5');
    const Person6Promise =
      ApiRickandMorty.get<WelcomeLocation>('location?page=6');
    const Person7Promise =
      ApiRickandMorty.get<WelcomeLocation>('location?page=7');

    const resp = await Promise.all([
      PersonPromise,
      Person2Promise,
      Person3Promise,
      Person4Promise,
      Person5Promise,
      Person6Promise,
      Person7Promise,
    ]);
    console.log(resp);

    setlocation({
      Location: resp[0].data.results,
      Location2: resp[1].data.results,
      Location3: resp[2].data.results,
      Location4: resp[3].data.results,
      Location5: resp[4].data.results,
      Location6: resp[5].data.results,
      Location7: resp[6].data.results,
    });
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  return {
    ...location,
  };
};
