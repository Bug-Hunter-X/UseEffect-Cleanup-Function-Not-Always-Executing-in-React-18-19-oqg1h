```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the cleanup function
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // This cleanup function is never executed because of the return statement
    return () => {
      clearInterval(intervalId);
      console.log('cleanup executed'); // this won't run
    };
  }, []);

  return <div>Count: {count}</div>;
}
```