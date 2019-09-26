import React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: '10%', marginLeft: '10%', maxWidth: '80%'}}>
        <div style={{marginTop: '5%', marginBottom: '5%', width: '100%', height: '100%'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{padding: '0.5vw'}}>
            <img src="/images/staff.png" style={{height: 128, width: 128}} alt={1}/>
            <p style={{textAlign: "center"}}>Dante Staff</p>
          </div>
          <div style={{padding: '0.5vw'}}>
            <img src="/images/patient.png" style={{height: 128, width: 128}} alt={2}/>
            <p style={{textAlign: "center"}}>Dante Patient</p>
          </div>
          <div style={{padding: '0.5vw'}}>
            <img src="/images/scanner.png" style={{height: 128, width: 128}} alt={3}/>
            <p style={{textAlign: "center"}}>Dante Scanner</p>
          </div>
        </div>
        <p style={{textAlign: "center", fontSize: '5em', fontWeight: 300}}>Dante Apps</p>
        <p style={{textAlign: "center", fontSize: '1.25rem'}}>Three 3 iOS applications designed for clinic operations</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'left', width: '100%'}}>
          <div style={{width: '100%', height: '100%'}}>
            <p style={{fontSize: '2rem', fontWeight: 300}}>How To Install</p>
            <hr></hr>
            <ol>
              <li>Install TestFlight from Apple App Store</li>
              <li>Ask our development team to give you the Redeem Code to install the app</li>
            </ol>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'left', width: '100%'}}>
          <div style={{width: '100%', height: '100%'}}>
            <p style={{fontSize: '2rem', fontWeight: 300}}>Installation Requirement</p>
            <hr style={{ }}/>
            <ol>
              <li>Make sure your iOS version >= 12.2 (we highly recommend you to update to the lastest version of iOS)</li>
              <li>Enable Bluetooth in Settings.</li>
              <li>There will be an alert asking about the previlege of accessing your location the first you open the app. Please select Always Allow as this app is highly dependent on location services.</li>
            </ol>
          </div>
        </div>
    </div>
  );
}

export default App;
