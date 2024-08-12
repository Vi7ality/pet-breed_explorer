'use client';

import { useEffect, useState } from 'react';
import getPets from '../../../lib/utils/getPets';

export default function PetsList() {
  const [petList, setPetList] = useState([]);
  useEffect(() => {
    getPets()
      .then((pets) => setPetList(pets))
      .finally(console.log('petList', petList));
  });
  return <ul></ul>;
}
