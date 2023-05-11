import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  AleksandraLinczewska,
  CedricVanPutten,
  KrzysztofPiaskowy,
  LouisZawadzki,
  MichalPierzchala,
  MonicaRestrepo,
  PierrePoupinMathieuFedrigo,
  RiccardoCipolleschi,
  TommyNguyen,
} from './components/Speakers';

const ReactNativeConnection2023 = () => (
  <>
    <AleksandraLinczewska />
    <CedricVanPutten />
    <KrzysztofPiaskowy />
    <LouisZawadzki />
    <MichalPierzchala />
    <MonicaRestrepo />
    <PierrePoupinMathieuFedrigo />
    <RiccardoCipolleschi />
    <TommyNguyen />
  </>
);

const App = () => {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
        <ReactNativeConnection2023 />
      </ScrollView>
    </View>
  );
};

export default App;
