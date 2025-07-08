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
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)`,
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: '-0.05em',
            marginBottom: 20,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          VerifyHire
        </div>
        
        {/* Main text */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: '80%',
            letterSpacing: '-0.02em',
          }}
        >
          Employee Verification &
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: '80%',
            letterSpacing: '-0.02em',
            marginBottom: 40,
          }}
        >
          Overemployment Detection
        </div>
        
        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '70%',
          }}
        >
          Protect your startup from dual employment fraud
        </div>
        
        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}