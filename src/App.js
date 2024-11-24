import React from 'react';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="container">
      <PageTitle>TO DO LIST</PageTitle>
      <div className={style.app__wapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
