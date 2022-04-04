import React from 'react';
import { ProviderContext as ProviderContextV1 } from './context-v1.0.0';
import { ProviderContext as ProviderContextV11 } from './context-v1.1.0';
import { ProviderContext as ProviderContextV2 } from './context-v2.0.0';


function Test() {
  const ctxV1 = React.useContext(ProviderContextV1);

  return (
    <ProviderContextV11.Provider value={{ foo: 'red', bar: 'blue', baz: 'green' }}>
      <ProviderContextV2.Provider value={{ bar: 'white', baz: 'black'}}>
        <pre>1.0.0 (defaultValue): {JSON.stringify(ctxV1)}</pre>
        <Consumer />
      </ProviderContextV2.Provider>
    </ProviderContextV11.Provider>
  )
}

function Consumer() {
  const ctx = React.useContext(ProviderContextV1);
  const ctxV11 = React.useContext(ProviderContextV11);
  const ctxV2 = React.useContext(ProviderContextV2);

  return (
    <>
      <pre>1.0.0: {JSON.stringify(ctx)}</pre>
      <pre>1.1.0: {JSON.stringify(ctxV11)}</pre>
      <pre>2.0.0: {JSON.stringify(ctxV2)}</pre>
    </>
  );
}

// Export this to enable SSR
export async function getServerSideProps() {
  return { props: {}};
}

export default Test