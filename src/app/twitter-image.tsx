import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'VerifyHire - Employee Verification Platform';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #000 0%, #111 50%, #000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(29, 161, 242, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(29, 161, 242, 0.2) 0%, transparent 50%)`,
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: '-0.05em',
            marginBottom: 20,
            color: '#1DA1F2',
          }}
        >
          VerifyHire
        </div>
        
        {/* Main text */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '80%',
            letterSpacing: '-0.02em',
            marginBottom: 30,
          }}
        >
          Detect Overemployed Workers.
          <br />
          Protect Your Startup.
        </div>
        
        {/* Call to action */}
        <div
          style={{
            fontSize: 24,
            opacity: 0.9,
            textAlign: 'center',
            padding: '12px 32px',
            background: 'rgba(29, 161, 242, 0.1)',
            border: '2px solid rgba(29, 161, 242, 0.3)',
            borderRadius: '50px',
          }}
        >
          Join the Waitlist →
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}