import React from 'react';
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Card from './layout/Card';
import Random from './components/basics/Random';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentList from './components/repetition/StudentList';
import ProductList from './components/repetition/ProductList';
import OddOrEven from './components/conditional/OddOrEven';
import UserInfo from './components/conditional/UserInfo';
import DirectDad from './components/communication/DirectDad';
import IndirectDad from './components/communication/IndirectDad';
import './App.css';

export default () => {
  return (
    <div className="app">
      <First />
      <div className="cards">
        <Card title="#08 Indirect Comunication Hooks">
          <IndirectDad name="Welen" age="18" nerd={true} />
        </Card>

        <Card title="#07 Direct Comunication">
          <DirectDad />
        </Card>

        <Card title="#06 Conditional tasks">
          <OddOrEven number={21} />
          <UserInfo user={{ name: 'Louis' }} />
          <UserInfo user={{ name: '', email: 'lou@hot.com' }} />
        </Card>

        <Card title="#05 Repetition Challenge">
          <ProductList />
        </Card>

        <Card title="#03 Family Component">
          <Family lastName="Mendes">
            <FamilyMember name="Wendler" />
            <FamilyMember name="Alcides" />
            <FamilyMember name="Lucivã" />
          </Family>
        </Card>

        <Card title="#02 Random Challenge">
          <Random min="1" max="100" />
        </Card>

        <Card title="#01 Props Component ">
          <WithParams title="Let's take over React" subtitle="Developer on the road" />
        </Card>
      </div>
    </div>
  );
}