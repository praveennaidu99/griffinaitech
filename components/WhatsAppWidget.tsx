'use client'

import { motion } from 'framer-motion'

export default function WhatsAppWidget() {
  const whatsappUrl = 'https://wa.me/919700437350?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Griffin%20AI%20solutions.'

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 999 }}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            textDecoration: 'none',
            position: 'relative'
          }}
          aria-label="Chat on WhatsApp"
        >
          {/* Tooltip */}
          <span
            style={{
              position: 'absolute',
              right: '72px',
              background: '#0f172a',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              opacity: 0,
              transition: 'opacity 0.2s ease',
              letterSpacing: '0.5px'
            }}
            className="whatsapp-tooltip"
          >
            Chat with us
          </span>
          
          {/* Style block for tooltip hover (CSS fallback to avoid heavy JS triggers) */}
          <style jsx global>{`
            a:hover .whatsapp-tooltip {
              opacity: 1 !important;
            }
          `}</style>

          <svg 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.57 2.028 14.108 1.001 11.5 1c-5.45 0-9.876 4.372-9.88 9.8.002 1.77.474 3.5 1.37 5.013l-.994 3.633 3.738-.988c1.554.85 3.284 1.298 4.873 1.3zm10.741-6.974c-.29-.144-1.715-.845-1.98-.94-.264-.097-.456-.145-.648.144-.192.29-.744.94-.912 1.13-.168.192-.336.216-.626.072-1.026-.514-1.772-1.027-2.476-2.227-.184-.316.184-.294.526-.976.084-.17.042-.317-.021-.462-.063-.144-.648-1.562-.888-2.14-.233-.561-.47-.484-.648-.493-.168-.008-.36-.008-.552-.008-.192 0-.504.072-.768.36-.264.29-1.008.986-1.008 2.404 0 1.418 1.032 2.79 1.176 2.984.144.192 2.032 3.102 4.921 4.352.688.297 1.224.474 1.642.607.69.22 1.32.19 1.815.115.552-.083 1.714-.7 1.953-1.374.24-.674.24-1.25.168-1.37-.072-.12-.264-.19-.552-.336z"/>
          </svg>
        </a>
      </motion.div>
    </div>
  )
}
