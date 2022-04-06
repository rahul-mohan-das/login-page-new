import "./App.css";

function App() {
  return (
    <div class="container flex flex-row mx-auto my-24 w-2/3 rounded-3xl">
      <div id="left" class="w-1/2 h-96 bg-white rounded-l-3xl">
        <div class="container p-10 mt-10">
          <h1 class="text-3xl font-light text-slate-800 text-center mb-6">
            Welcome Back
          </h1>
          <div class="my-1">
            <input
              type="email"
              placeholder="Email"
              class="w-full border-slate-300 border-2 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              class="w-full border-slate-300 border-2 rounded mt-2"
            />
          </div>
          <div class="my-1 flex flex-row items-center" >
            <input type="checkbox" />
            <label class="ml-1 text-xs text-slate-800 font-medium">
              Remember me
            </label>
          </div>
          <div class="my-4 flex flex-row">
            <a
              class="text-center grow bg-blue-400 text-white p-1 rounded"
              href="#"
            >
              Login
            </a>
          </div>
          <p class="my-2 text-xs text-slate-800 text-center font-medium">
            Forgot Your Password?
          </p>
        </div>
      </div>
      <div
        id="right"
        class="w-1/2 h-96 bg-work-desk bg-cover rounded-r-3xl"
      ></div>
    </div>
  );
}

export default App;
