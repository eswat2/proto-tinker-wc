// bag -- utility to work with localStorage...
//
// <meta name="mcp:localStorage-keys" content="proto-tinker-wc::app-data" />
//
const KEY = 'proto-tinker-wc::app-data';

// localStorage implementation... [ json ]
const bag = {
  get: () => {
    const json = localStorage.getItem(KEY);

    return json ? JSON.parse(json) : undefined;
  },
  store: data => {
    const json = JSON.stringify(data);

    localStorage.setItem(KEY, json);
  },
};

export { bag };
export default bag;
