import { CustomInput } from 'shared/customInput';

function App() {
  return (
    <div
      style={{
        margin: '0 auto',
        width: 1000,
        display: 'flex',

        justifyContent: 'center',
        padding: '20px 0',
      }}
    >
      <CustomInput type="text" placeholder="Input" />
    </div>
  );
}

export default App;
