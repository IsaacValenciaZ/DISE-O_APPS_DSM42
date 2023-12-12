import {useEffect, useState} from 'react';
import {Result, Welcome} from '../../interface/PersonaInterface';
import {ApiRickandMorty} from '../../api/ApiRickandMorty';
interface Person {
  character: Result[];
  character2: Result[];
  character3: Result[];
   character4: Result[];
  character5: Result[];
  character6: Result[];
  character7: Result[];
  character8: Result[];
  character9: Result[];
  character10: Result[];


}
export const UsePersonajes = () => {
  const [person, setPerson] = useState<Person>();

  const getPersonajes = async () => {
    const PersonPromise = ApiRickandMorty.get<Welcome>('character?page=1');
    const Person2Promise = ApiRickandMorty.get<Welcome>('character?page=2');
    const Person3Promise = ApiRickandMorty.get<Welcome>('character?page=3');
    const Person4Promise = ApiRickandMorty.get<Welcome>('character?page=4');
    const Person5Promise = ApiRickandMorty.get<Welcome>('character?page=5');
    const Person6Promise = ApiRickandMorty.get<Welcome>('character?page=6');
    const Person7Promise = ApiRickandMorty.get<Welcome>('character?page=7');
    const Person8Promise = ApiRickandMorty.get<Welcome>('character?page=8');
    const Person9Promise = ApiRickandMorty.get<Welcome>('character?page=9');
    const Person10Promise = ApiRickandMorty.get<Welcome>('character?page=10');




    const resp = await Promise.all([PersonPromise, Person2Promise, Person3Promise, Person4Promise, Person5Promise, Person6Promise, Person7Promise, Person8Promise, Person9Promise, Person10Promise]);
    setPerson({
      character: resp[0].data.results,
        character2:resp[1].data.results,
        character3:resp[2].data.results,
        character4:resp[3].data.results,
        character5:resp[4].data.results,
        character6:resp[5].data.results,
        character7:resp[6].data.results,
        character8:resp[7].data.results,
        character9:resp[8].data.results,
        character10:resp[9].data.results,





    });
  };

  useEffect(() => {
    getPersonajes()
  }, []);

  return{
    ...person
  }
};
