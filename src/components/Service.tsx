const Service = () => {
  const handleReportAd = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to report this ad?"
    );

    if (userConfirmed) {
      window.alert("Thank you for reporting. We will review the ad shortly.");
    }
  };

  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=Check out this amazing content!`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const handleFollow = () => {
    const followUrl = `https://www.facebook.com/examplepage`;
    window.open(followUrl, "_blank", "width=600,height=400");
  };
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-5 md:px-8 py-5 md:py-10 md:w-2/3 mx-auto gap-5 bg-[#262626] rounded">
        <div className="bg-[#bbbaf8] p-5 rounded ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>

          <p className="pt-3 pb-2 font-semibold">Extra Warranty</p>
          <p>Extended Protection</p>
        </div>
        <div className="bg-[#bbbaf8] p-5 rounded ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
          <p className="pt-3 pb-2 font-semibold">Fast Shipping</p>
          <p>Quick Delivery</p>
        </div>
        <div className="bg-[#bbbaf8] p-5 rounded ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
            />
          </svg>

          <p className="pt-3 pb-2 font-semibold">Custom Keycaps</p>
          <p>Design Your Keycaps</p>
        </div>
        <div className="bg-[#bbbaf8] p-5 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>

          <p className="pt-3 pb-2 font-semibold">Best Support</p>
          <p>24/7 Help</p>
        </div>
      </div>
      <div className="flex md: justify-around mt-20 rounded">
        <div>
          <button onClick={handleReportAd}>Report Ad</button>
        </div>
        <div className="w-72 bg-[#262626] text-white p-2">
          <div className="flex gap-5 items-center">
            <div className="w-24">
              <button onClick={handleReportAd}>Report Ad</button>
              <img
                src="https://i.ibb.co/0Gnc4nj/istockphoto-1047712096-612x612.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-xl font-semibold">KeyPress Corner</p>
              <p>35454 followers</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleFollow}
              className="bg-white text-black p-1 rounded"
            >
              Follow Page
            </button>
            <button
              onClick={handleShare}
              className="flex gap-1 bg-white text-black p-1 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
