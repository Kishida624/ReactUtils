# promise-hooks-react

React Promise Hooks.

## Usage

```tsx
import { usePromise, useCallbackPromise } from 'promise-hooks-react';

function ComponentA() {
  const [data, error, isLoading, reload] = usePromise(() => fetch(url), []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div>
      {error && <div className="error">Error: {error}</div>}
      {data && (
        <>
          <div className="data">Response: {data}</div>
          <button onClick={reload}>reload</button>
        </>
      )}
    </div>
  );
}

function ComponentB() {
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

## License

[MIT](../../LICENSE)