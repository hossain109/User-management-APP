import React,{Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';

export default function Index() {
  return (
    <Fragment>
      <Home />
    </Fragment>
  )
}

const container = document.getElementById('root');

const main = ReactDOM.createRoot(container);

main.render(<Index />);