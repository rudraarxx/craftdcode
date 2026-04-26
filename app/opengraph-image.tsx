import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Craftdcode | Design · Develop · Deliver";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Background Grid Motif */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.1,
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 150,
                height: 150,
                border: "1px solid white",
              }}
            />
          ))}
        </div>

        {/* Logo and Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
             <div style={{ width: 40, height: 40, background: "white" }} />
             <div style={{ width: 40, height: 40, background: "white" }} />
          </div>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            CRAFTDCODE
          </h1>
          <p
            style={{
              fontSize: 24,
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "0.5em",
              margin: 0,
            }}
          >
            Design · Develop · Deliver
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
