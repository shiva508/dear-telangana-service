const VideoForm = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 h-svh	">
      <div className="border-stone-950 bg-green-600	 flex flex-col justify-center items-center w-2/5 rounded">
        <h1 className="font-black text-rose-50">Video </h1>
        <div className="flex flex-col w-1/2 my-2">
          <h3 className="text-white font-medium">Name</h3>
          <input
            type="text"
            class="form-input  rounded border-slate-400 p-1 h-8 w-100"
          ></input>
        </div>
        <div className="flex flex-col w-1/2 my-2">
          <h3 className="text-white font-medium">URL</h3>
          <input
            type="text"
            class="form-input  rounded border-slate-400 h-8 p-1 w-100"
          ></input>
        </div>
        <div className="flex flex-col w-1/2 my-2">
          <h3 className="text-white font-medium">Cover</h3>
          <input
            type="text"
            class="form-input  rounded border-slate-400 h-8 p-1 w-100"
          ></input>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col w-22 my-2">
            <h3 className="text-white font-medium">Star Rating</h3>
            <input
              type="text"
              class="form-input  rounded border-slate-400 h-8 p-1 w-100"
            ></input>
          </div>
          <div className="flex flex-col w-16 my-2">
            <h3 className="text-white font-medium">Rating</h3>
            <input
              type="text"
              class="form-input  rounded border-slate-400 h-8 p-1 w-100"
            ></input>
          </div>
          <div className="flex flex-col w-14 my-2">
            <h3 className="text-white font-medium">Year</h3>
            <input
              type="text"
              class="form-input  rounded border-slate-400 h-8 p-1 w-100"
            ></input>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col w-14 my-2">
            <h3 className="text-white font-medium">Genre</h3>
            <input
              type="text"
              class="form-input  rounded border-slate-400 h-8 p-1 w-100"
            ></input>
          </div>
          <div className="flex flex-col w-16 my-2">
            <h3 className="text-white font-medium">Runtime</h3>
            <input
              type="text"
              class="form-input  rounded border-slate-400 h-8 p-1 w-100"
            ></input>
          </div>
          <div className="flex flex-col w-22 my-2">
            <h3 className="text-white font-medium">Cast</h3>
            <input
              type="text"
              class="form-input  rounded border-slate-400 h-8 p-1 w-100"
            ></input>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              console.log("HI");
            }}
            class="bg-slate-900	 hover:bg-slate-500	text-white font-medium p-1 rounded my-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoForm;
