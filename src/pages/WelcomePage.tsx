import { ScanLine, MapPin } from 'lucide-react';
import './WelcomePage.css';

interface WelcomePageProps {
  onScanComplete: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onScanComplete }) => {
  return (
    <div className="container flex-col flex-center animate-fade-in" style={{ justifyContent: 'space-between', padding: '40px 24px' }}>
      <div className="header-section text-center mt-8">
        <h1 className="text-h1 mb-4" style={{ background: 'linear-gradient(to right, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          LineLess
        </h1>
        <p className="text-body">Skip the line. Order and pay directly from your phone.</p>
      </div>

      <div className="glass-panel scan-card flex-col flex-center gap-6 animate-slide-up" style={{ padding: '32px', width: '100%', marginTop: 'auto', marginBottom: 'auto' }}>
        <div className="scanner-icon-container" style={{ position: 'relative' }}>
          <div className="scanner-ring" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ScanLine size={40} className="text-accent" />
          </div>
          <div className="scanner-line"></div>
        </div>
        
        <div className="text-center">
          <h2 className="text-h2 mb-4">You're at The Food Court</h2>
          <div className="flex-center gap-2 text-caption">
            <MapPin size={16} />
            <span>Sector 42, Metro Station</span>
          </div>
        </div>

        <button className="btn-primary mt-4" onClick={onScanComplete}>
          Tap to Scan Table QR
        </button>
      </div>

      <div className="footer text-caption text-center" style={{ opacity: 0.5 }}>
        Powered by LineLess Technology
      </div>
    </div>
  );
};
