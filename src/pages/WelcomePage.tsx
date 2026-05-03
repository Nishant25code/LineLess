import { ScanLine, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex-col flex-center">
      <div className="mobile-wrapper flex-col flex-center" style={{ flex: 1, justifyContent: 'center' }}>
        
        <div className="text-center mb-8">
          <h1 className="text-h1 mb-2 text-accent">LineLess</h1>
          <p className="text-body">Skip the line. Order and pay directly from your phone.</p>
        </div>

        <div className="card flex-col flex-center gap-6 w-full" style={{ padding: '40px 24px' }}>
          
          <div style={{ padding: '24px', background: 'var(--bg-tertiary)', borderRadius: '50%' }}>
            <ScanLine size={48} className="text-accent" />
          </div>
          
          <div className="text-center">
            <h2 className="text-h2 mb-2">You're at The Food Court</h2>
            <div className="flex-center gap-2 text-caption">
              <MapPin size={16} />
              <span>Sector 42, Metro Station</span>
            </div>
          </div>

          <button className="btn-primary mt-4" onClick={() => navigate('/menu')}>
            View Menu & Order
          </button>
        </div>

        <div className="text-caption text-center mt-8 text-secondary">
          Powered by LineLess Technology
        </div>

      </div>
    </div>
  );
};
