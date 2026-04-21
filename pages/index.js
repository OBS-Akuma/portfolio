export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.message}>
        This website is owned by Akuma and is not in use atm
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#808080', // Gray background
    minHeight: '100vh', // Full viewport height
    width: '100%',
    position: 'relative',
  },
  message: {
    position: 'absolute',
    top: '20px', // Slight spacing from the top
    left: '20px', // Slight spacing from the left
    fontSize: '16px',
    color: '#000000', // Black text for contrast
    fontFamily: 'Arial, sans-serif',
  },
};
