import { MdCircle } from 'react-icons/md';

import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { FaGenderless } from 'react-icons/fa6';

import { FaUser } from 'react-icons/fa';
import { RiAliensFill } from 'react-icons/ri';
import { PiFinnTheHuman } from 'react-icons/pi';
import { FaUserSecret } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { GiAnimalHide } from 'react-icons/gi';
import { FaDisease } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa6';

export default function Icon({ dataType, value }) {
  if (dataType === 'status') {
    return value === 'Alive' ? (
      <MdCircle className='text-green-500' />
    ) : value === 'Dead' ? (
      <MdCircle className='text-red-500' />
    ) : (
      <MdCircle className='text-slate-400' />
    );
  } else if (dataType === 'gender') {
    return value === 'Male' ? (
      <FaMale className='text-slate-600 text-lg -ml-0.5' />
    ) : value === 'Female' ? (
      <FaFemale className='text-slate-600 text-lg -ml-0.5' />
    ) : value === 'Genderless' ? (
      <FaGenderless className='text-slate-400' />
    ) : (
      <MdCircle className='text-slate-400' />
    );
  }

  if (dataType === 'species') {
    switch (value) {
      case 'Human':
        return <FaUser className='text-[0.7rem]' />;

      case 'Alien':
        return <RiAliensFill />;

      case 'Humanoid':
        return <PiFinnTheHuman className='text-[0.9rem]' />;

      case 'Mythological Creature':
        return <FaUserSecret className='text-[0.9rem]' />;

      case 'unknown':
        return <FaRegQuestionCircle className='text-[0.9rem]' />;

      case 'Animal':
        return <GiAnimalHide className='text-[0.9rem]' />;

      case 'Disease':
        return <FaDisease className='text-[0.9rem]' />;

      case 'Robot':
        return <FaRobot className='text-[0.9rem]' />;

      default:
        break;
    }
  }
}
