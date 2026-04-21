
export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.message}>
          This website is owned by Akuma (console.dev/0xeeeeee) and is not in use atm
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#808080',
    minHeight: '100vh',
    width: '100%',
  },
  message: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '16px',
    color: '#000000',
    fontFamily: 'Arial, sans-serif',
  },
};
