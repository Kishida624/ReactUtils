# promise-hooks-react

## Usage

```tsx
import {} from 'promise-hooks-react';

function Component() {
  const [data, error, isLoading] = usePromise(() => fetch(url), []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div>
      {error && <div className="error">Error: {error}</div>}
      {data && <div className="data">Response: {data}</div>}
    </div>
  );
}

function Component() {
  const [submit, data, error, isSubmitting] = useCallbackPromise((value) => fetch(url, { method: 'POST', body: value }), []);
  
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div>
      {error && <div className="error">Error: {error}</div>}
      {data && <div className="data">Response: {data}</div>}
      <button onClick={submit('some value')}>submit</button>
    </div>
  );
}
```