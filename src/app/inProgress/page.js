"use client";

import React from 'react';
import { motion } from 'framer-motion';

const InProgress = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem',
      textAlign: 'center'
    },
    title: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#2c3e50',
      marginBottom: '48px',
      letterSpacing: '-0.02em',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
      maxWidth: '600px',
      marginBottom: '3rem',
      lineHeight: '1.6'
    },
    progressContainer: {
      width: '100%',
      maxWidth: '400px',
      height: '20px',
      backgroundColor: '#e0e5ec',
      borderRadius: '10px',
      marginBottom: '3rem',
      boxShadow: 'inset 3px 3px 5px rgba(163, 177, 198, 0.5), inset -3px -3px 5px rgba(255, 255, 255, 0.5)'
    },
    progressBar: {
      height: '100%',
      width: '65%',
      borderRadius: '10px',
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      boxShadow: '0 2px 10px rgba(118, 75, 162, 0.4)'
    },
    iconContainer: {
      fontSize: '5rem',
      marginBottom: '2rem',
      color: '#764ba2'
    },
    contactLink: {
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: '600',
      borderBottom: '2px dashed #667eea',
      paddingBottom: '2px',
      transition: 'all 0.3s ease'
    },
    socialLinks: {
      display: 'flex',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    socialIcon: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={styles.iconContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4"></path>
            <path d="m16.2 7.8 2.9-2.9"></path>
            <path d="M18 12h4"></path>
            <path d="m16.2 16.2 2.9 2.9"></path>
            <path d="M12 18v4"></path>
            <path d="m7.8 16.2-2.9 2.9"></path>
            <path d="M6 12H2"></path>
            <path d="m7.8 7.8-2.9-2.9"></path>
          </svg>
        </div>
      </motion.div>

      <h1 style={styles.title}>Work in Progress</h1>
      
      <p style={styles.subtitle}>
        We're currently working hard to bring you an amazing experience. 
        This page will be available soon. Check back later or contact us for updates.
      </p>

      <div style={styles.progressContainer}>
        <motion.div 
          style={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: '65%' }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </div>

      <p style={{ ...styles.subtitle, marginBottom: '0.5rem' }}>
        Estimated completion: <strong>65%</strong>
      </p>
      
      <p style={styles.subtitle}>
        Have questions? <a href="mailto:contact@example.com" style={styles.contactLink}>Email us</a>
      </p>

      <div style={styles.socialLinks}>
        <motion.a 
          href="#" 
          style={styles.socialIcon}
          whileHover={{ scale: 1.2, color: '#3b5998' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </motion.a>
        <motion.a 
          href="#" 
          style={styles.socialIcon}
          whileHover={{ scale: 1.2, color: '#1da1f2' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </motion.a>
        <motion.a 
          href="#" 
          style={styles.socialIcon}
          whileHover={{ scale: 1.2, color: '#0077b5' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </motion.a>
        <motion.a 
          href="#" 
          style={styles.socialIcon}
          whileHover={{ scale: 1.2, color: '#e1306c' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default InProgress;