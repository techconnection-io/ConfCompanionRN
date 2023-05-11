import React from 'react';
import {BaseSpeaker} from './BaseSpeaker';

const RiccardoCipolleschi = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 13, 30)}
    name={'Riccardo Cipolleschi'}
    title={'From Codegen to Your First PR in Core'}
  />
);

const MichalPierzchala = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 14, 5)}
    name={'Michał Pierzchała'}
    title={'Scaling teams with Federated Super Apps'}
  />
);

const CedricVanPutten = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 14, 40)}
    name={'Cedric van Putten'}
    title={'Debugging Should Be Easier'}
  />
);

const PierrePoupinMathieuFedrigo = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 14, 55)}
    name={'Pierre Poupin, Mathieu Fedrigo'}
    title={
      'Bringing the Best of React to TV Navigation: A React-Like Solution for Remote Control'
    }
  />
);

const KrzysztofPiaskowy = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 16, 0)}
    name={'Krzysztof Piaskowy'}
    title={'3D and Canvas-Based Animations with Reanimated'}
  />
);

const AleksandraLinczewska = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 16, 35)}
    name={'Aleksandra Linczewska'}
    title={'Passwordless Login in React Native'}
  />
);

const MonicaRestrepo = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 16, 50)}
    name={'Mónica Restrepo'}
    title={
      'Testing Apps at Scale: How Shopify Manages Testing and QA of Its Mobile Applications'
    }
  />
);

const LouisZawadzki = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 17, 25)}
    name={'Louis Zawadzki'}
    title={'Using a Scientific Approach to Debug Performance Issues'}
  />
);

const TommyNguyen = () => (
  <BaseSpeaker
    startDate={new Date(2023, 5, 2, 17, 40)}
    name={'Tommy Nguyen'}
    title={
      'Raising the Bar: Our Journey Making React Native a Preferred Choice'
    }
  />
);

export {
  AleksandraLinczewska,
  CedricVanPutten,
  KrzysztofPiaskowy,
  LouisZawadzki,
  MichalPierzchala,
  MonicaRestrepo,
  PierrePoupinMathieuFedrigo,
  RiccardoCipolleschi,
  TommyNguyen,
};
