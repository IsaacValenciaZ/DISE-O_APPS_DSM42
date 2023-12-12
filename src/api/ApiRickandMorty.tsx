import axios from 'axios'

import React from 'react'

export const ApiRickandMorty =axios.create({
baseURL:'https://rickandmortyapi.com/api/'
})  

