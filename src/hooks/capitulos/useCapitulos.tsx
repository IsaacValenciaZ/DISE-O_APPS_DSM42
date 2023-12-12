import {useEffect, useState} from 'react';
import {ApiRickandMorty} from '../../api/ApiRickandMorty';
import { Result, WelcomeCapitulo } from '../../interface/CapitulosInterface';
interface Person {
  Temporada: Result[];
  Temporada2: Result[];
  Temporada3: Result[];
}
export const useCapitulos = () => {
  const [person, setPerson] = useState<Person>();

  const getPersonajes = async () => {
    const PersonPromise = ApiRickandMorty.get<WelcomeCapitulo>('episode?page=1');
    const Person2Promise = ApiRickandMorty.get<WelcomeCapitulo>('episode?page=2');
    const Person3Promise = ApiRickandMorty.get<WelcomeCapitulo>('episode?page=3');

    const resp = await Promise.all([
      PersonPromise,
      Person2Promise,
      Person3Promise,
    ]);
    setPerson({
      Temporada: resp[0].data.results,
      Temporada2: resp[1].data.results,
      Temporada3: resp[2].data.results,
    });
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  return {
    ...person,
  };
};
