import { useEffect } from "react";

const LoaderPage = () => {
  useEffect(() => {
    // Prevent the page from scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-50
        flex min-h-screen items-center justify-center
        bg-background
        bg-[radial-gradient(circle_at_70%_50%,hsl(142_55%_45%/0.15),transparent_50%)]
      "
    >
      <div className="flex flex-col items-center gap-6">
        {/* Loader */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          {/* Outer rotating ring */}
          <div
            className="
              absolute inset-0
              rounded-full
              border-2 border-muted
              border-t-[hsl(142_55%_45%)]
              animate-spin
            "
          />

          {/* Inner glow */}
          <div
            className="
              h-7 w-7 rounded-full
              bg-[hsl(142_55%_45%)]
              opacity-20
              animate-pulse
            "
          />

          {/* Center dot */}
          <div
            className="
              absolute
              h-2.5 w-2.5
              rounded-full
              bg-[hsl(142_55%_45%)]
            "
          />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-foreground">
            Loading
          </p>

          <div className="mt-2 flex justify-center gap-1">
            <span className="h-1 w-1 rounded-full bg-[hsl(142_55%_45%)] animate-bounce [animation-delay:-0.3s]" />
            <span className="h-1 w-1 rounded-full bg-[hsl(142_55%_45%)] animate-bounce [animation-delay:-0.15s]" />
            <span className="h-1 w-1 rounded-full bg-[hsl(142_55%_45%)] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
