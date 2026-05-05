import { ScanLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page-container">
      <div className="welcome-qr-content">


        <div className="welcome-qr-header">
          <div className="welcome-qr-icon-badge">
            <ScanLine size={28} />
          </div>
          <h1 className="welcome-qr-title">Scan to Order</h1>
          <p className="welcome-qr-subtitle">
            Scan the QR code on your table to browse the menu and place your order instantly.
          </p>
        </div>


        <div className="welcome-qr-card">
          <div className="welcome-qr-frame">

            <span className="welcome-qr-corner welcome-qr-corner-tl" />
            <span className="welcome-qr-corner welcome-qr-corner-tr" />
            <span className="welcome-qr-corner welcome-qr-corner-bl" />
            <span className="welcome-qr-corner welcome-qr-corner-br" />


            <svg className="welcome-qr-svg" viewBox="0 0 29 29" shapeRendering="crispEdges">


              <rect x="0" y="0" width="7" height="7" fill="currentColor"/>
              <rect x="1" y="1" width="5" height="5" fill="var(--bg-primary)"/>
              <rect x="2" y="2" width="3" height="3" fill="currentColor"/>

              <rect x="22" y="0" width="7" height="7" fill="currentColor"/>
              <rect x="23" y="1" width="5" height="5" fill="var(--bg-primary)"/>
              <rect x="24" y="2" width="3" height="3" fill="currentColor"/>

              <rect x="0" y="22" width="7" height="7" fill="currentColor"/>
              <rect x="1" y="23" width="5" height="5" fill="var(--bg-primary)"/>
              <rect x="2" y="24" width="3" height="3" fill="currentColor"/>


              <rect x="8" y="6" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="6" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="6" width="1" height="1" fill="currentColor"/>
              <rect x="6" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="6" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="6" y="12" width="1" height="1" fill="currentColor"/>


              <rect x="20" y="20" width="5" height="5" fill="currentColor"/>
              <rect x="21" y="21" width="3" height="3" fill="var(--bg-primary)"/>
              <rect x="22" y="22" width="1" height="1" fill="currentColor"/>



              <rect x="8" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="15" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="19" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="20" y="8" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="9" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="9" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="9" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="9" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="9" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="19" y="10" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="15" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="20" y="11" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="12" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="12" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="12" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="12" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="12" width="1" height="1" fill="currentColor"/>
              <rect x="19" y="12" width="1" height="1" fill="currentColor"/>


              <rect x="9" y="13" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="13" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="13" width="1" height="1" fill="currentColor"/>
              <rect x="15" y="13" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="13" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="14" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="14" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="14" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="14" width="1" height="1" fill="currentColor"/>
              <rect x="19" y="14" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="15" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="15" width="1" height="1" fill="currentColor"/>
              <rect x="15" y="15" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="15" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="16" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="16" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="16" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="16" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="16" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="16" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="17" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="17" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="17" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="17" width="1" height="1" fill="currentColor"/>
              <rect x="19" y="17" width="1" height="1" fill="currentColor"/>


              <rect x="8" y="18" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="18" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="18" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="18" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="19" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="19" width="1" height="1" fill="currentColor"/>
              <rect x="15" y="19" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="19" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="20" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="20" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="20" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="20" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="20" width="1" height="1" fill="currentColor"/>


              <rect x="22" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="24" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="26" y="8" width="1" height="1" fill="currentColor"/>
              <rect x="28" y="8" width="1" height="1" fill="currentColor"/>

              <rect x="23" y="9" width="1" height="1" fill="currentColor"/>
              <rect x="25" y="9" width="1" height="1" fill="currentColor"/>
              <rect x="27" y="9" width="1" height="1" fill="currentColor"/>

              <rect x="22" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="24" y="10" width="1" height="1" fill="currentColor"/>
              <rect x="26" y="10" width="1" height="1" fill="currentColor"/>

              <rect x="23" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="25" y="11" width="1" height="1" fill="currentColor"/>
              <rect x="28" y="11" width="1" height="1" fill="currentColor"/>

              <rect x="22" y="12" width="1" height="1" fill="currentColor"/>
              <rect x="26" y="12" width="1" height="1" fill="currentColor"/>


              <rect x="8" y="22" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="22" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="22" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="22" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="22" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="23" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="23" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="23" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="23" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="24" width="1" height="1" fill="currentColor"/>
              <rect x="12" y="24" width="1" height="1" fill="currentColor"/>
              <rect x="15" y="24" width="1" height="1" fill="currentColor"/>
              <rect x="18" y="24" width="1" height="1" fill="currentColor"/>

              <rect x="9" y="25" width="1" height="1" fill="currentColor"/>
              <rect x="10" y="25" width="1" height="1" fill="currentColor"/>
              <rect x="13" y="25" width="1" height="1" fill="currentColor"/>
              <rect x="16" y="25" width="1" height="1" fill="currentColor"/>

              <rect x="8" y="26" width="1" height="1" fill="currentColor"/>
              <rect x="11" y="26" width="1" height="1" fill="currentColor"/>
              <rect x="14" y="26" width="1" height="1" fill="currentColor"/>
              <rect x="17" y="26" width="1" height="1" fill="currentColor"/>


              <rect x="26" y="22" width="1" height="1" fill="currentColor"/>
              <rect x="28" y="22" width="1" height="1" fill="currentColor"/>
              <rect x="25" y="23" width="1" height="1" fill="currentColor"/>
              <rect x="27" y="23" width="1" height="1" fill="currentColor"/>
              <rect x="26" y="24" width="1" height="1" fill="currentColor"/>
              <rect x="28" y="25" width="1" height="1" fill="currentColor"/>
              <rect x="25" y="26" width="1" height="1" fill="currentColor"/>
              <rect x="27" y="26" width="1" height="1" fill="currentColor"/>
              <rect x="26" y="27" width="1" height="1" fill="currentColor"/>
              <rect x="28" y="27" width="1" height="1" fill="currentColor"/>
              <rect x="25" y="28" width="1" height="1" fill="currentColor"/>
              <rect x="27" y="28" width="1" height="1" fill="currentColor"/>
            </svg>

          </div>
          <p className="welcome-qr-table-label">Table #12 — Food Court</p>
        </div>


        <button className="welcome-qr-cta" onClick={() => navigate('/menu')}>
          Browse Menu
        </button>

        <p className="welcome-qr-footnote">
          Or ask your server for assistance
        </p>
      </div>
    </div>
  );
};
